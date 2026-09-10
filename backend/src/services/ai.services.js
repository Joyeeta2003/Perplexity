import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import {HumanMessage, SystemMessage} from "langchain";
import {ChatMistralAI} from '@langchain/mistralai'


const GeminiModel = new ChatGoogleGenerativeAI({
  model: "gemini-3.7-flash",
  apiKey: process.env.GEMINI_API_KEY
});

const MistralModel = new ChatMistralAI({
  model:"mistral-small-latest",
  apiKey:process.env.MISTRAL_API_KEY
})

export async function generateRespose(message) {
  const response = await GeminiModel.invoke([
    new HumanMessage(message)
  ])
  return response.text
}

export async function generateChatTitle(message) {
  const response = await MistralModel.invoke([
    new SystemMessage(`you are a helpful assistant that genarate concise and descriptive title for the chat conversation.
      user will provide you with the first message of a chat conversation, and you will generate a title that capture the essence os the conversation in 2-4 words.
      the title should be clear and relevant and engaging, giving user a quick understanding of the chat's topic.`
    ),
    new HumanMessage(
      `Genarate a title for the chat conversation based on the following first message :"${message}" `
    )
  ])

  return response.text
}
