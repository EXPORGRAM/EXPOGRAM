"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.chatSession = exports.uploadToGemini = void 0;
const { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold, } = require("@google/generative-ai");
const { GoogleAIFileManager } = require("@google/generative-ai/files");
const apiKey = process.env.GEMINI_API_KEY || 'AIzaSyA_tLa2yTrK2v7EtEzLmZOo1fQndRU6wTo';
const genAI = new GoogleGenerativeAI(apiKey);
const fileManager = new GoogleAIFileManager(apiKey);
const uploadToGemini = (path, mimeType) => __awaiter(void 0, void 0, void 0, function* () {
    const uploadResult = yield fileManager.uploadFile(path, {
        mimeType,
        displayName: path,
    });
    const file = uploadResult.file;
    console.log(`Uploaded file ${file.displayName} as: ${file.name}`);
    return file;
});
exports.uploadToGemini = uploadToGemini;
const model = genAI.getGenerativeModel({
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
// const files = [
//     await uploadToGemini("image_architecture2.jpeg", "image/jpeg"),
//   ];
exports.chatSession = model.startChat({
    generationConfig
});
