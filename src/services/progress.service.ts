import { Progress } from '../models/progress.model';
import { db } from '../database/connection';

export class ProgressService {
  async getUserProgress(userId: string): Promise<Progress[]> {
    return db('UserProgress').where({ userId });
  }

  async updateMasteryScore(userId: string, topicId: string, newScore: number): Promise<void> {
    await db('UserProgress')
      .where({ userId, topicId })
      .update({ masteryScore: newScore, lastUpdated: db.fn.now() });
  }
}