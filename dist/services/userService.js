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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = exports.signUp = exports.getUsers = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const user_1 = __importDefault(require("../models/user"));
const getUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const user = user_1.default.find();
    return user_1.default.find();
});
exports.getUsers = getUsers;
const signUp = (name, password, email) => __awaiter(void 0, void 0, void 0, function* () {
    const hashedPassword = yield bcrypt_1.default.hash(password, 10);
    const newUser = new user_1.default({
        name,
        email,
        password: hashedPassword,
    });
    return newUser.save();
});
exports.signUp = signUp;
const loginUser = (name, providedPassword) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_1.default.findOne({ name });
    if (!user) {
        return null;
    }
    const hello = "$2b$10$I1E2iaOlUkWrRrTzN406GO.7RnaNEiEeDlI.PkoR9/aDZ5tZiHPxK";
    const hi = "$2b$10$I1E2iaOlUkWrRrTzN406GO.7RnaNEiEeDlI.PkoR9/aDZ5tZiHPxK";
    const isPasswordValid = yield bcrypt_1.default.compare(hello, hi);
    console.log("🚀 ~ loginUser ~ isPasswordValid:", isPasswordValid);
    return isPasswordValid ? user : null;
});
exports.loginUser = loginUser;
