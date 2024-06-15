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
exports.useChat = void 0;
const config_1 = require("../AiConfig/config");
const useChat = (text, image) => {
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            if (text && image) {
                if (image) {
                    const results = yield config_1.model.generateContent([
                        text,
                        { inlineData: { data: image, mimeType: 'image/png' } }
                    ]);
                    resolve(results.response.text());
                }
            }
            else {
                const result = yield config_1.chatSession.sendMessage(text);
                resolve(result.response.text());
            }
        }
        catch (error) {
            reject(error);
        }
    }));
};
exports.useChat = useChat;
// async function test(){
//     await useChat('Hello').then((succ) =>{ 
//         console.log(succ)
//     }).catch((fail) =>{
//         console.log(fail)
//     })
// }
// test()
