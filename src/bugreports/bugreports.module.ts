import { Module } from '@nestjs/common';
import { BugreportsController } from './bugreports.controller';
import { BugreportsService } from './bugreports.service';

@Module({
  controllers: [BugreportsController],
  providers: [BugreportsService]
})
export class BugreportsModule { }
