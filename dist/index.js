"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = 3000;
app.get("/", (req, res) => {
    res.send("Hello from express server yo with typescript");
});
// mongoose.connect(process.env.DATABASE_URL)
// const db = mongoose.connection;
//  db.on('error', (error) => {
//     console.error('MongoDB connection error:', error);
//  });
// db.on('connected', () => console.log('Connected to database'));
// app.use(express.json());
// const subscribersRouter = require('./routes/subscribers');
// app.use('/subscribers', subscribersRouter);
app.listen(PORT, () => console.log("its's running"));
