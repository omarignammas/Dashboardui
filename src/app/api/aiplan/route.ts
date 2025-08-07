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
  } catch (err: unknown) {
    if (err instanceof Error) {
      return NextResponse.json(
        { error: err.message },
        { status: 500 }
      );
    }
  
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}  
