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

  async getAllTopics(): Promise<Topic[]> {
    try {
      const topics = await db('Topic').select('*');
      return topics;
    } catch (error) {
      throw new Error(`Failed to get all topics: ${error}`);
    }
  }

  async getUserTopics(userId: string): Promise<Topic[]> {
    try {
      const allTopics = await this.getAllTopics();
      const userProgress = await db('Progress')
        .where({ userId })
        .select('*');
  
      const inProgressTopics = allTopics.filter(topic =>
        userProgress.some(progress => progress.topicId === topic.id && progress.masteryScore < 100)
      );
  
      const yetToStartTopics = allTopics.filter(topic =>
        !userProgress.some(progress => progress.topicId === topic.id)
      );
  
      const sortedInProgressTopics = inProgressTopics.sort((a, b) => {
        const aProgress = userProgress.find(progress => progress.topicId === a.id);
        const bProgress = userProgress.find(progress => progress.topicId === b.id);
        return aProgress.masteryScore - bProgress.masteryScore;
      });
  
      const lowestScoreTopic = sortedInProgressTopics[0];
  
      return [...yetToStartTopics, lowestScoreTopic];
    } catch (error) {
      throw new Error(`Failed to get user topics: ${error}`);
    }
  }

}