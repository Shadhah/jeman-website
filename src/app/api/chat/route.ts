import { NextResponse } from "next/server";
import { companyProfile } from "@/data/companyProfile";

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const systemPrompt = `
You are Jeman Holdings Ltd's official assistant.
Always answer based ONLY on the following company profile:

${companyProfile}

If a question is unrelated to Jeman Holdings or cannot be answered from the profile,
politely respond: "I’m sorry, I can only answer questions about Jeman Holdings Ltd."
`;

    // Keep last 8 messages for context
    const recentMessages = messages.slice(-8);

    const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.GROQ_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "llama-3.1-8b-instant",
        messages: [
          { role: "system", content: systemPrompt },
          ...recentMessages,
        ],
      }),
    });

    if (!res.ok) {
      const err = await res.json();
      console.error("❌ Groq API Error:", err);
      return NextResponse.json(
        { role: "assistant", content: "⚠️ Sorry, our assistant is offline right now." },
        { status: 500 }
      );
    }

    const data = await res.json();
    const reply = data.choices[0].message;

    return NextResponse.json(reply);
  } catch (error) {
    console.error("Groq API error:", error);
    return NextResponse.json(
      { role: "assistant", content: "⚠️ Sorry, something went wrong." },
      { status: 500 }
    );
  }
}
