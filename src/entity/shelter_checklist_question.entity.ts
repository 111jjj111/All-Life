import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ShelterChecklistAnswer } from './shelter_checklist_answer.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class ShelterChecklistQuestion extends BaseEntity {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  q_id: number;

  @ApiProperty()
  @Column()
  sentence: string;

  @ApiProperty({ type: [ShelterChecklistAnswer] })
  @OneToMany(
    (type) => ShelterChecklistAnswer,
    (shelterChecklistAnswer) => shelterChecklistAnswer.shelterChecklistQuestion,
    { eager: false },
  ) // 점검 질문지 < 점검 답변
  shelterChecklistAnswer: ShelterChecklistAnswer[];
}
