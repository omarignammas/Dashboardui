import ModelClient, { isUnexpected, ChatCompletionsOutput } from "@azure-rest/ai-inference";
import { AzureKeyCredential } from "@azure/core-auth";

const token = process.env.AZURE_API_KEY!;
const endpoint = "https://models.github.ai/inference";
const model = "deepseek/DeepSeek-R1";

export async function askDeepSeek(prompt: string): Promise<string> {
  const client = ModelClient(endpoint, new AzureKeyCredential(token));

  const response = await client.path("/chat/completions").post({
    body: {
      model,
      messages: [
        {
          role: "system",
          content:
            "You're a planning assistant. launch plans and roadmaps formatted in Markdown with detailled Tasks and deadlines. Do NOT include internal thoughts, reasoning, or explanation. No <think> tags.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 0.7,
      top_p: 0.95,
      max_tokens: 2048,
    },
  });

  if (isUnexpected(response)) {
    throw new Error(response.body.error?.message || "Unexpected error from model response.");
  }

  const output = response.body as ChatCompletionsOutput;

  const raw = output.choices?.[0]?.message?.content ?? "";

  const cleaned = raw.replace(/<think>[\s\S]*?<\/think>/gi, "").trim();

  return cleaned;
}
