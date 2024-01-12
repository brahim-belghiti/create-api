import mongoose from "mongoose";
import { IUser } from "../types/user.type";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        trim: true,
    }
})

const User = mongoose.model<IUser>('User', userSchema);
export = User;