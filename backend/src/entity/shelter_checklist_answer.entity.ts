import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ShelterInfo } from './shelter_info.entity';
import { User } from './user.entity';
import { ShelterChecklistQuestion } from './shelter_checklist_question.entity';

@Entity()
export class ShelterChecklistAnswer extends BaseEntity {
  @PrimaryGeneratedColumn()
  a_id: number;

  @Column()
  score: number;

  @CreateDateColumn()
  created_at: Date;

  @ManyToOne((type) => User, (user) => user.shelterChecklistAnswer, {
    eager: false,
  })
  user: User;

  @ManyToOne(
    (type) => ShelterChecklistQuestion,
    (shelterChecklistQuestion) =>
      shelterChecklistQuestion.shelterChecklistAnswer,
    { eager: true },
  ) // 점검 답변 > 점검 질문지
  shelterChecklistQuestion: ShelterChecklistQuestion;

  @ManyToOne(
    (type) => ShelterInfo,
    (shelterInfo) => shelterInfo.shelterChecklistAnswer,
    { eager: false },
  ) // 점검 답변 > 대피소 정보
  shelterInfo: ShelterInfo;
}
