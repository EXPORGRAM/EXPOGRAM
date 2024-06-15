
const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
const { GoogleAIFileManager } = require("@google/generative-ai/files")
  
const apiKey = process.env.GEMINI_API_KEY || 'AIzaSyA_tLa2yTrK2v7EtEzLmZOo1fQndRU6wTo';
const genAI = new GoogleGenerativeAI(apiKey);
const fileManager = new GoogleAIFileManager(apiKey);
  
export const uploadToGemini = async (path: string, mimeType:string) => {
    const uploadResult = await fileManager.uploadFile(path, {
      mimeType,
      displayName: path,
    });
    const file = uploadResult.file;
    console.log(`Uploaded file ${file.displayName} as: ${file.name}`);
    return file;
}

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

export const chatSession = model.startChat({
    generationConfig
});
