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
exports.updateChatWithAi = exports.initiateChat = void 0;
const firebase_1 = require("../../firebaseconfig/firebase");
const initiateChat = (curreUserEmail, chatId, text, aiReply, imageUrl) => {
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const newChat = {
                user: text,
                imageUrl: imageUrl,
                Ai: aiReply,
                created_at: firebase_1.firebase.firestore.FieldValue.serverTimestamp()
            };
            const store = yield firebase_1.db
                .collection('users')
                .doc(curreUserEmail)
                .collection('chat with ai')
                .add(newChat);
            resolve(store.id);
        }
        catch (error) {
            reject(error);
        }
    }));
};
exports.initiateChat = initiateChat;
const updateChatWithAi = (currentUserEmail, chatId, text, aiReply, imageUrl) => {
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const snapshot = yield firebase_1.db
                .collection('users')
                .doc(currentUserEmail)
                .collection('chat with ai')
                .doc(chatId)
                .get();
            if (snapshot.exists) {
                const chatRef = snapshot.ref;
                const newChat = {
                    user: text,
                    imageUrl: imageUrl,
                    Ai: aiReply,
                    created_at: firebase_1.firebase.firestore.FieldValue.serverTimestamp()
                };
                yield chatRef.update({
                    chat: firebase_1.firebase.firestore.FieldValue.arrayUnion(newChat)
                });
                resolve('Chat updated');
            }
        }
        catch (error) {
        }
    }));
};
exports.updateChatWithAi = updateChatWithAi;
