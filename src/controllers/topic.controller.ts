import { Request, Response } from 'express';
import { TopicService } from '../services/topic.service';

export class TopicController {
  private topicService: TopicService;

  constructor() {
    this.topicService = new TopicService();
  }

  public getTopicList = async (req: Request, res: Response): Promise<void> => {
    try {
      const subject = req.params.subject;
      console.log("got subject: " +subject);
      const topics = await this.topicService.getTopicList(subject);
      res.json(topics);
    } catch (error) {
      res.status(500).send(500);
    }
  };

  public selectTopicForStudy = async (req: Request, res: Response): Promise<void> => {
    try {
      const userId = req.params.userId;
      const topics = await this.topicService.getUserTopics(userId);
      res.json(topics);
    } catch (error) {
      res.status(500).send(error);
    }
  };

  public getAllTopics = async (req: Request, res: Response): Promise<void> => {
    try {
      const topics = await this.topicService.getAllTopics();
      res.json(topics);
    } catch (error) {
      console.error("Error getting all topics:", error);
      res.status(500).send(error);
    }
  };
  
}