import { Topic } from '../models/topic.model';
import db from '../database/connection';

export class TopicService {
  async getTopicList(subjectArea: string): Promise<Topic[]> {
    try {
      const topics = await db('Topic')
        .where({ subjectArea })
        .select('*');
      return topics;
    } catch (error) {
      throw new Error(`Failed to get topics: ${error}`);
    }
  }

  async getTopicById(topicId: string): Promise<Topic> {
    try {
      const topic = await db('Topic')
        .where({ topicId })
        .first();
      if (!topic) {
        throw new Error(`Topic with ID ${topicId} not found`);
      }
      return topic;
    } catch (error) {
      throw new Error(`Failed to get topic: ${error}`);
    }
  }
}