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
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const env_1 = __importDefault(require("./config/env"));
const app = (0, express_1.default)();
const PORT = env_1.default.port;
const DATABASE_URL = env_1.default.database_url || '';
app.use(express_1.default.json());
mongoose_1.default
    .connect(DATABASE_URL)
    .then(() => {
    console.log('Connected to the mongoose database');
})
    .catch((error) => {
    console.error('MongoDB connection error:', error);
});
const subscribersRouter = require('./routes/subscribersRoute');
app.use('/subscribers', subscribersRouter);
const userRoute = require('./routes/userRoutes');
app.use('/users', userRoute);
app.listen(PORT, () => __awaiter(void 0, void 0, void 0, function* () {
    console.log(`Server is running on port ${PORT}`);
}));
