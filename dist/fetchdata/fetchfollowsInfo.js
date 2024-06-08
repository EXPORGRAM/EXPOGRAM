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
exports.fetchfollowing = exports.fetchFollowers = void 0;
const firebase_1 = require("../firebaseconfig/firebase");
const fetchFollowers = (user) => {
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            if (user.followers.length <= 0) {
                resolve([]);
            }
            else {
                firebase_1.db
                    .collection('user')
                    .where(firebase_1.firebase.firestore.FieldPath.documentId(), 'in', user.followers)
                    .onSnapshot((snapshot) => {
                    const followers = snapshot.docs.map((doc) => {
                        return (Object.assign({}, doc.data()));
                    });
                    resolve(followers);
                });
            }
        }
        catch (error) {
            reject(error);
        }
    }));
};
exports.fetchFollowers = fetchFollowers;
const fetchfollowing = (user) => {
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            if (user.following.length <= 0) {
                resolve([]);
            }
            else {
                firebase_1.db
                    .collection('user')
                    .where(firebase_1.firebase.firestore.FieldPath.documentId(), 'in', user.following)
                    .onSnapshot((snapshot) => {
                    const following = snapshot.docs.map((doc) => {
                        return (Object.assign({}, doc.data()));
                    });
                    resolve(following);
                });
            }
        }
        catch (error) {
            reject(error);
        }
    }));
};
exports.fetchfollowing = fetchfollowing;
