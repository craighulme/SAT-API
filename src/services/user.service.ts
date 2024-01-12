import { User } from '../models/user.model';
import db from '../database/connection';

export class UserService {
  async registerUser(user: User): Promise<User> {
    const [newUser] = await db('User').insert(user).returning('*');
    return newUser;
  }

  public async getUserProfile(userId: string): Promise<any> {
    const user = await db('User').where({ id: userId }).first();
    return user;
  }
}