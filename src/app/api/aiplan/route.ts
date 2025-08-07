import { NextRequest, NextResponse } from "next/server";
import { askDeepSeek } from "@/utils/deepseek";
import { askMixtral } from "@/utils/mixtral"; 

export async function POST(req: NextRequest) {
  try {
    const { prompt, model } = await req.json();

    if (!prompt) {
      return NextResponse.json({ error: "Prompt is required." }, { status: 400 });
    }

    let result = "";

    if (model === "mixtral") {
      result = await askMixtral(prompt);
    } else {
      result = await askDeepSeek(prompt);
    }

    return NextResponse.json({ result });
  } catch (err: any) {
    return NextResponse.json(
      { error: err?.message || "Something went wrong." },
      { status: 500 }
    );
  }
}
