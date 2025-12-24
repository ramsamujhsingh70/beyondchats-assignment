import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function summarizeArticle(text) {
  try {
    const res = await client.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "Summarize the article briefly." },
        { role: "user", content: text }
      ],
    });

    return res.choices[0].message.content;
  } catch (err) {
    console.warn("LLM fallback used");
    return text.slice(0, 120) + "...";
  }
}

export async function analyzeSentiment(text) {
  try {
    const res = await client.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "Classify sentiment as Positive, Neutral, or Negative." },
        { role: "user", content: text }
      ],
    });

    return res.choices[0].message.content;
  } catch {
    return "Neutral";
  }
}
export async function analyzeArticle(text) {
  const summary = await summarizeArticle(text);
  const sentiment = await analyzeSentiment(text);

  return { summary, sentiment };
}
