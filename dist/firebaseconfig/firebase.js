"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.storage = exports.db = exports.firebase = void 0;
const app_1 = __importDefault(require("firebase/compat/app"));
exports.firebase = app_1.default;
require("firebase/compat/auth");
require("firebase/compat/firestore");
require("firebase/compat/storage");
//import { getAnalytics } from "@firebase/analytics";
//import exp from "constants";
const firebaseConfig = {
    apiKey: "AIzaSyDZNniGl6HJQgKcc3S4aLHXEc1hgrv0f0o",
    authDomain: "expogram-ce49a.firebaseapp.com",
    projectId: "expogram-ce49a",
    storageBucket: "expogram-ce49a.appspot.com",
    messagingSenderId: "940006901580",
    appId: "1:940006901580:web:42132f3d0ec040ff33b1e9",
    measurementId: "G-J6Q7XBP3JF"
};
// Initialize Firebase
//!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
app_1.default.initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const db = app_1.default.firestore();
exports.db = db;
const storage = app_1.default.storage();
exports.storage = storage;
// Path: src/api/server.ts 
