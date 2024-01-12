import bcrypt from 'bcrypt';
import { IUser } from '../types/user.type';
import User from '../models/user';

export const getUsers = async (): Promise<IUser[]> => {
  const user = User.find();
  return User.find();
};

export const signUp = async (name: string, password: string, email: string): Promise<IUser> => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({
    name,
    email,
    password: hashedPassword,
  });
  return newUser.save();
};

export const loginUser = async (name: string, providedPassword: string): Promise<IUser | null> => {
  const user = await User.findOne({ name });
  console.log("🚀 ~ loginUser ~ user:", user)
  if (!user) {
    return null;
  }
  const isPasswordValid = await bcrypt.compare(providedPassword, user.password);
  return isPasswordValid ? user : null;
};
