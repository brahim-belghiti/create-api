"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const process_1 = __importDefault(require("process"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const e = {
    port: process_1.default.env.PORT ? parseInt(process_1.default.env.PORT) : undefined,
    database_url: process_1.default.env.DATABASE_URL,
};
exports.default = e;
