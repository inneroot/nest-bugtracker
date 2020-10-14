import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BugreportsController } from './bugreports.controller';
import { BugreportsService } from './bugreports.service';
import { Bugreport } from './../entitys/bugreports.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Bugreport])],
  //exports: [TypeOrmModule],
  controllers: [BugreportsController],
  providers: [BugreportsService]
})
export class BugreportsModule { }
