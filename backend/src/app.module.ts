import { Module } from '@nestjs/common';
import { UserModule } from './domain/user/user.module';
import { ShelterModule } from './domain/shelter/shelter.module';
import { typeORMConfig } from './configs/typeorm.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './module/auth/auth.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeORMConfig), UserModule, ShelterModule, AuthModule],
})
export class AppModule {}
