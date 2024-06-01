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
exports.storeUserDetails = void 0;
const firebase_1 = require("../firebaseconfig/firebase");
const storeUserDetails = (uid, email, username, country, profile_picture) => {
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield firebase_1.db.collection("users")
                .doc(email)
                .set({
                user_id: uid,
                email: email,
                username: username,
                profile_picture: profile_picture,
                bio: "",
                linkk: "",
                gender: ["prefer not say", ""],
                followers: [],
                following: [],
                followersRequset: [],
                followingRequest: [],
                events_notification: [],
                chat_notification: [],
                saved_posts: [],
                close_friends: [],
                favorite_users: [],
                muted_users: [],
                created_at: firebase_1.firebase.firestore.FieldValue.serverTimestamp(),
                country: country
            });
            resolve(true);
        }
        catch (error) {
            reject(error);
        }
    }));
};
exports.storeUserDetails = storeUserDetails;
