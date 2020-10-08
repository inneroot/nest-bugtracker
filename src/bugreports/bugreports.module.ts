import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BugreportsController } from './bugreports.controller';
import { BugreportsService } from './bugreports.service';
import { BugreportEntity } from './../entitys/bugreports.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BugreportEntity])],
  //exports: [TypeOrmModule],
  controllers: [BugreportsController],
  providers: [BugreportsService]
})
export class BugreportsModule { }
