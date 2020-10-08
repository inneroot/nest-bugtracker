import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { BugreportEntity } from 'src/entitys/bugreports.entity'
import { Repository } from 'typeorm'
import { CreateBugreportDto } from './dto/create-bugreport.dto'

@Injectable()
export class BugreportsService {
  constructor(
    @InjectRepository(BugreportEntity)
    private bugreportRepository: Repository<BugreportEntity>,
  ) { }

  findAll(): Promise<BugreportEntity[]> {
    return this.bugreportRepository.find()
  }

  findOne(id: string): Promise<BugreportEntity> {
    return this.bugreportRepository.findOne(id)
  }

  async create(bugreport: CreateBugreportDto) {
    const newBugreport = new BugreportEntity()
    newBugreport.text = bugreport.text
    newBugreport.title = bugreport.title
    await this.bugreportRepository.save(newBugreport)
  }

  async remove(id: string): Promise<void> {
    await this.bugreportRepository.delete(id)
  }
}
