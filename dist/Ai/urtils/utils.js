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
exports.imageToBase64 = void 0;
const fs = require('fs');
const imageToBlob = (imageUrl) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield fetch(imageUrl);
        const blob = yield response.blob();
        return blob;
    }
    catch (error) {
        console.log(error);
    }
    return undefined;
});
const imageToBase64 = (imageUrl) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //const blob: Blob | undefined = await imageToBlob(imageUrl)
        const reader = fs.readFileSync(imageUrl);
        const base_64 = Buffer.from(reader).toString('base64');
        return base_64;
    }
    catch (error) {
        console.log(error);
    }
});
exports.imageToBase64 = imageToBase64;
