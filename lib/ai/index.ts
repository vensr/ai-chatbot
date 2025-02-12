import { createOpenAI, openai } from "@ai-sdk/openai";
import { experimental_wrapLanguageModel as wrapLanguageModel } from "ai";

import { customMiddleware } from "./custom-middleware";

export const customModel = (apiIdentifier: string) => {
  const customOpenai = createOpenAI({
    baseURL: process.env.GATEWAY_URL,
  });

  return wrapLanguageModel({
    model: customOpenai(apiIdentifier),
    middleware: customMiddleware,
  });
};

export const imageGenerationModel = openai.image("dall-e-3");
