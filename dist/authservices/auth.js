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
exports.onLogin = exports.onRegister = void 0;
const firebase_1 = require("../firebaseconfig/firebase");
const database_1 = require("../database/database");
const onRegister = (email, username, password, country) => {
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        try {
            const authUsers = yield firebase_1.firebase.auth().createUserWithEmailAndPassword(email, password);
            if (((_a = authUsers.user) === null || _a === void 0 ? void 0 : _a.uid) && authUsers.user.email) {
                const create = yield (0, database_1.storeUserDetails)(authUsers.user.uid, authUsers.user.email, username, country);
                if (create) {
                    resolve(true);
                }
            }
        }
        catch (error) {
            reject(false);
        }
    }));
};
exports.onRegister = onRegister;
// Function to log in to an existing user account
const onLogin = (email, password) => {
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield firebase_1.firebase.auth().signInWithEmailAndPassword(email, password);
            resolve(true);
        }
        catch (error) {
            console.log(error);
            reject(false);
        }
    }));
};
exports.onLogin = onLogin;
