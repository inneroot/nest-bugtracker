import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { BugreportsModule } from './bugreports/bugreports.module'

@Module({
  imports: [BugreportsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
