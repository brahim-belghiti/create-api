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
  const user = await User.findOne({name});
  if (!user) {
    return null;
  }
   const hello = "$2b$10$I1E2iaOlUkWrRrTzN406GO.7RnaNEiEeDlI.PkoR9/aDZ5tZiHPxK";
   const hi = "$2b$10$I1E2iaOlUkWrRrTzN406GO.7RnaNEiEeDlI.PkoR9/aDZ5tZiHPxK";
  const isPasswordValid = await bcrypt.compare(hello, hi);
  console.log("🚀 ~ loginUser ~ isPasswordValid:", isPasswordValid)
  return isPasswordValid ? user : null;
};
