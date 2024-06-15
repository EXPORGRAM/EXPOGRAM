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
const config_1 = require("../AiConfig/config");
// import { saveChat } from '../History/chatAiDb'
// import { db, firebase } from '../../firebaseconfig/firebase'
const utils_1 = require("../urtils/utils");
let url = 'https://gemini.google.com';
const useChat = (text, imageUrl) => {
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            let reply;
            if (text && imageUrl) {
                const image = yield (0, utils_1.imageToBase64)(imageUrl);
                if (image) {
                    const results = yield config_1.model.generateContent([
                        text,
                        { inlineData: { data: image, mimeType: 'image/png' } }
                    ]);
                    resolve(results.response.text());
                }
            }
            else {
                reply = yield config_1.chatSession.sendMessage(text);
                resolve(reply.response.text());
            }
        }
        catch (error) {
            reject(error);
        }
    }));
};
function test() {
    return __awaiter(this, void 0, void 0, function* () {
        yield useChat('what is this photo', 'C:\\Users\\caleb\\Desktop\\EXPOGRAM\\assets\\icon.png').then((succ) => {
            console.log(succ);
        }).catch((fail) => {
            console.log(fail);
        });
    });
}
/*'https://cff2.earth.com/uploads/2022/12/16142438/Black-bears-2-scaled.jpg'*/
test();
