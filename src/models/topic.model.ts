import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('topics')
export class Topic {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

  @Column({ length: 500 })
  subjectArea: string;

  @Column('int')
  masteryLevel: number;
}