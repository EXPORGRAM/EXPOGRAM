require("dotenv").config({ path: '../../../secret.env' });

const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.GEMINI_API_KEY;

const genAI = new GoogleGenerativeAI(apiKey);

export const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    category: HarmCategory.SAFE,
    blockThreshold: HarmBlockThreshold.HIGH
});
  
const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
};
  
export const chatSession = model.startChat({
    generationConfig
});

