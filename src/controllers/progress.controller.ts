import { Request, Response } from 'express';
import { ProgressService } from '../services/progress.service';

export class ProgressController {
  private progressService: ProgressService;

  constructor() {
    this.progressService = new ProgressService();
  }

  public getUserProgress = async (req: Request, res: Response): Promise<void> => {
    const userId = req.params.userId;
    try {
      const progress = await this.progressService.getUserProgress(userId);
      res.status(200).json(progress);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  public updateMasteryScore = async (req: Request, res: Response): Promise<void> => {
    const userId = req.params.userId;
    const topicId = req.params.topicId;
    const newScore = req.body.newScore;
    try {
      await this.progressService.updateMasteryScore(userId, topicId, newScore);
      res.status(200).json({ message: 'Mastery score updated successfully.' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}