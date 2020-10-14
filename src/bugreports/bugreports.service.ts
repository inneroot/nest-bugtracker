import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Bugreport } from '../entitys/bugreports.entity'
import { Repository } from 'typeorm'
import { CreateBugreportDto } from './dto/create-bugreport.dto'

@Injectable()
export class BugreportsService {
  constructor(
    @InjectRepository(Bugreport)
    private bugreportRepository: Repository<Bugreport>,
  ) { }

  findAll(): Promise<Bugreport[]> {
    return this.bugreportRepository.find()
  }

  findOne(id: string): Promise<Bugreport> {
    return this.bugreportRepository.findOne(id)
  }

  async create(bugreport: CreateBugreportDto) {
    const newBugreport = new Bugreport()
    newBugreport.text = bugreport.text
    newBugreport.title = bugreport.title
    await this.bugreportRepository.save(newBugreport)
  }

  async remove(id: string): Promise<void> {
    await this.bugreportRepository.delete(id)
  }
}
