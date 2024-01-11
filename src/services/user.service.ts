import { User } from '../models/user.model';
import { db } from '../database/connection';

export class UserService {
  async registerUser(user: User): Promise<User> {
    const result = await db('User').insert(user).returning('*');
    return result[0];
  }

  async getUserProfile(userId: string): Promise<User> {
    const user = await db('User').where({ userId }).first();
    return user;
  }
}