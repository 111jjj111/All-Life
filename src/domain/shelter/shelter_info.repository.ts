import { Injectable } from '@nestjs/common';
import { ShelterInfo } from 'src/entity/shelter_info.entity';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class ShelterInfoRepository extends Repository<ShelterInfo> {
  constructor(private dataSource: DataSource) {
    super(ShelterInfo, dataSource.createEntityManager());
  }
}
