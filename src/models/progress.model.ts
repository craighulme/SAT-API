import { Topic } from './topic.model';
import { User } from './user.model';

export interface Progress {
  id: number;
  user: User;
  topic: Topic;
  masteryScore: number;
  lastUpdated: Date;
}


// import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
// import { User } from './user.model';
// import { Topic } from './topic.model';

// @Entity('progress')
// export class Progress {

//   @PrimaryGeneratedColumn()
//   id: number;

//   @ManyToOne(() => User)
//   @JoinColumn({ name: 'userId' })
//   user: User;

//   @ManyToOne(() => Topic)
//   @JoinColumn({ name: 'topicId' })
//   topic: Topic;

//   @Column({ type: 'int' })
//   masteryScore: number;

//   @Column({ type: 'timestamp' })
//   lastUpdated: Date;
// }