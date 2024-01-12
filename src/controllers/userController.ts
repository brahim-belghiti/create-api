import { Request, Response } from 'express';
import { IUser } from '../types/user.type';
import * as userService from '../services/userService';

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users: IUser[] = await userService.getUsers();
    res.status(200).json({ users, message: 'Users retrieved successfully' });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const signUp = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;
    const newUser = await userService.signUp(name, email, password);
    res.status(201).json({ newUser, message: 'New user created successfully' });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const loginUser = async (req: Request, res: Response) => {
  const { name, password } = req.body;
  try {
    const user: IUser | null = await userService.loginUser(name, password);
    
    if (user) {
      res.status(200).json({ user, message: 'Login successful' });
    } else {
      res.status(401).send('Not Allowed');
    }
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ message: 'Something went wrong' });
  }
};
