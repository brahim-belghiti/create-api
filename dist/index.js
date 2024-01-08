"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = 3000;
const DATABASE_URL = process.env.DATABASE_URL || '';
mongoose_1.default.connect(DATABASE_URL)
    .then(() => {
    console.log('Connected to the mongoose database');
})
    .catch((error) => {
    console.error('MongoDB connection error:', error);
});
app.use(express_1.default.json());
const subscribersRouter = require('./routes/subscribersRoute');
app.use('/subscribers', subscribersRouter);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
