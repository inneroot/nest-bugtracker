import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Connection } from 'typeorm'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { BugreportsModule } from './bugreports/bugreports.module'

@Module({
  imports: [TypeOrmModule.forRoot(), BugreportsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) { }
}
