import { UserProgress } from '../models/progress.model';
import { Topic } from '../models/topic.model';

interface StudyPlan {
  topic: Topic;
  activities: string[];
}

export function generateStudyPlan(availableTime: number, userProgress: UserProgress[]): StudyPlan[] {
  // Sort topics by mastery level in ascending order
  const sortedTopics = userProgress.sort((a, b) => a.masteryScore - b.masteryScore);

  const studyPlan: StudyPlan[] = [];

  for (const progress of sortedTopics) {
    // Estimate time needed for each topic based on mastery level
    const estimatedTime = (100 - progress.masteryScore) / 10;

    if (availableTime >= estimatedTime) {
      availableTime -= estimatedTime;

      studyPlan.push({
        topic: progress.topic,
        activities: [
          'Explanation',
          'Mini-Lesson',
          'Practice Questions',
          'Solutions',
          'Concluding Quiz',
        ],
      });
    } else {
      break;
    }
  }

  return studyPlan;
}