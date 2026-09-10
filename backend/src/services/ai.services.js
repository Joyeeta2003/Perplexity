import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import {HumanMessage} from "@langchain/core/messages";

const model = new ChatGoogleGenerativeAI({
  model: "gemini-3.7-flash",
  apiKey: process.env.GEMINI_API_KEY
});

export async function generateRespose(message) {
  const response = await model.invoke([
    new HumanMessage(message)
  ])
  return response.text
}
