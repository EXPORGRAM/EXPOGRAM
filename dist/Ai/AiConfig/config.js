"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chatSession = exports.model = void 0;
require("dotenv").config({ path: '../../../secret.env' });
const { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold, } = require("@google/generative-ai");
const apiKey = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);
exports.model = genAI.getGenerativeModel({
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
exports.chatSession = exports.model.startChat({
    generationConfig
});
