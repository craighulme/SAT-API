import { Request, Response } from 'express';
import { TopicService } from '../services/topic.service';

export class TopicController {
  private topicService: TopicService;

  constructor() {
    this.topicService = new TopicService();
  }

  public getTopicList = async (req: Request, res: Response): Promise<void> => {
    try {
      const subjectArea = req.params.subjectArea;
      const topics = await this.topicService.getTopicList(subjectArea);
      res.json(topics);
    } catch (error) {
      res.status(500).send(500);
    }
  };

  public selectTopicForStudy = async (req: Request, res: Response): Promise<void> => {
    try {
      const topicID = req.params.topicID;
      const topic = await this.topicService.getTopicById(topicID);
      res.json(topic);
    } catch (error) {
      res.status(500).send(500);
    }
  };
}