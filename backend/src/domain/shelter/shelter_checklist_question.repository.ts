import { Injectable } from '@nestjs/common';
import { ShelterChecklistQuestion } from 'src/entity/shelter_checklist_question.entity';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class ShelterChecklistQuestionRepository extends Repository<ShelterChecklistQuestion> {
  constructor(private dataSource: DataSource) {
    super(ShelterChecklistQuestion, dataSource.createEntityManager());
  }
}
