import { Topic } from './topic.model';
import { User } from './user.model';

export interface Session {
  id: number;
  user: User;
  topics: Topic[];
  startTime: Date;
  endTime: Date;
  studyPlan: string;
}