import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Bugreport } from '../entitys/bugreports.entity'
import { Repository } from 'typeorm'

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
    const oneBugreport = this.bugreportRepository.findOne(id)
    if (!oneBugreport) throw new NotFoundException('Not found')
    return oneBugreport
  }

  async create(bugreport: Bugreport) {
    const newBugreport = new Bugreport()
    newBugreport.text = bugreport.text
    newBugreport.title = bugreport.title
    await this.bugreportRepository.save(newBugreport)
  }

  async remove(id: string): Promise<void> {
    await this.bugreportRepository.delete(id)
  }
}
