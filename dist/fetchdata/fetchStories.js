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
exports.fetchstories = void 0;
const firebase_1 = require("../firebaseconfig/firebase");
const fetchstories = () => {
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            firebase_1.firebase
                .firestore()
                .collectionGroup('stories')
                .onSnapshot((snapshot) => {
                const stories = snapshot.docs.map((doc) => {
                    return (Object.assign({ id: doc.id }, doc.data()));
                });
                resolve(stories);
            });
        }
        catch (error) {
            reject(error);
        }
    }));
};
exports.fetchstories = fetchstories;
