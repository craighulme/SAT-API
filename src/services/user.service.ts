import { User } from '../models/user.model';
import db from '../database/connection';

export class UserService {
  async registerUser(user: User): Promise<User> {
    const [newUser] = await db('User').insert(user).returning('*');
    return newUser;
  }

  async getUserProfile(id: string): Promise<User> {
    const user = await db('User').where({ id }).first();
    return user;
  }
}