import { Request, Response } from 'express';
import { UserService } from '../services/user.service';

export class UserController {
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  public async getUserProfile(req: Request, res: Response): Promise<void> {
    try {
      const userId = req.params.id;
      const userProfile = await this.userService.getUserProfile(userId);
      res.status(200).json(userProfile);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  public async registerUser(req: Request, res: Response): Promise<void> {
    try {
      const newUser = await this.userService.registerUser(req.body);
      res.status(201).json(newUser);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}