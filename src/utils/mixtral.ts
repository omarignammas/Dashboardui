

export async function askMixtral(prompt: string): Promise<string> {
    const apiKey = process.env.TOGETHER_API_KEY;
  
    if (!apiKey) {
      throw new Error("TOGETHER_API_KEY is not defined in environment variables.");
    }
  
    const response = await fetch("https://api.together.xyz/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
        messages: [
          {
            role: "system",
            content:
              "You're a planning assistant. Always respond with well-structured Markdown. Use titles and bullet points. No tables unless asked.",
          },
          {
            role: "user",
            content: prompt,
          },
        ],
        temperature: 0.7,
        max_tokens: 2048,
      }),
    });
  
    if (!response.ok) {
      const err = await response.text();
      throw new Error(`Mixtral API error: ${err}`);
    }
  
    const data = await response.json();
  
    const raw = data.choices?.[0]?.message?.content ?? "";
  
    const cleaned = raw
      .replace(/<think>[\s\S]*?<\/think>/gi, "") // if Mixtral adds <think> tags
      .replace(/\\n/g, "\n") // replace escaped newlines
      .trim();
  
    return cleaned;
  }
  