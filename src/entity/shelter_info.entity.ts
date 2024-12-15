import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ShelterChecklistAnswer } from './shelter_checklist_answer.entity';

@Entity()
export class ShelterInfo extends BaseEntity {
  @PrimaryGeneratedColumn()
  shelter_info_id: number;

  @Column()
  shelter_uuid: string;

  @Column({ type: 'float', default: 0 })
  score: number;

  @OneToMany(
    (type) => ShelterChecklistAnswer,
    (shelterChecklistAnswer) => shelterChecklistAnswer.shelterInfo,
    { eager: false },
  ) // 대피소 정보 < 점검 답변
  shelterChecklistAnswer: ShelterChecklistAnswer[];
}
