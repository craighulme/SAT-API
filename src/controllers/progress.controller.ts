import { Request, Response } from 'express';
import { ProgressService } from '../services/progress.service';

export class ProgressController {
  progressService;

  constructor() {
    this.progressService = new ProgressService();
  }

  public getUserProgress = async (req: Request, res: Response): Promise<void> => {
    const userId = req.params.userId;
    try {
      const progress = await this.progressService.getUserProgress(userId);
      res.status(200).json(progress);
    } catch (error) {
      res.status(500).json({ error: 500 });
    }
  }

  public updateMasteryScore = async (req: Request, res: Response): Promise<void> => {
    const userId = req.params.userId;
    const topicId = req.params.topicId;
    const newScore = req.body.masteryScore;
    try {
      await this.progressService.updateMasteryScore(userId, topicId, newScore);
      console.log("updating mastery score for UID: " + userId + " TID: " + topicId + " to " + newScore);
      res.status(200).json({ message: 'Mastery score updated successfully.' });
    } catch (error) {
      console.log("error: updating mastery score.")
      res.status(500).json({ error: 500 });
    }
  }
}