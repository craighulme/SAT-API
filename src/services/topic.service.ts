import { Topic } from '../models/topic.model';
import { database } from '../database/connection';

export class TopicService {
  async getTopicList(subjectArea: string): Promise<Topic[]> {
    try {
      const topics = await database('Topic')
        .where({ subjectArea })
        .select('*');
      return topics;
    } catch (error) {
      throw new Error(`Failed to get topics: ${error.message}`);
    }
  }

  async getTopicById(topicId: string): Promise<Topic> {
    try {
      const topic = await database('Topic')
        .where({ topicId })
        .first();
      if (!topic) {
        throw new Error(`Topic with ID ${topicId} not found`);
      }
      return topic;
    } catch (error) {
      throw new Error(`Failed to get topic: ${error.message}`);
    }
  }
}