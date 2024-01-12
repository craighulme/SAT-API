import { Request, Response } from 'express';
import { UserService } from '../services/user.service';

export class UserController {
  userService;

  constructor() {
    this.userService = new UserService();
    this.getUserProfile = this.getUserProfile.bind(this);
    this.registerUser = this.registerUser.bind(this);
  }

  public async getUserProfile(req: Request, res: Response): Promise<void> {
    try {
      const userId = req.params.id;
      const userProfile = await this.userService.getUserProfile(userId);
      // console.log(userProfile + ' ID: ' + userId);
      res.status(200).json(userProfile);
    } catch (error) {
      console.log("error: " + error);
      res.status(500).json({ message: error });
    }
  }

  public async registerUser(req: Request, res: Response): Promise<void> {
    try {
      console.log("registering user");
      console.log(req.body);
      const newUser = await this.userService.registerUser(req.body);
      res.status(201).json(newUser);
    } catch (error) {
      console.error("Error registering user:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
}