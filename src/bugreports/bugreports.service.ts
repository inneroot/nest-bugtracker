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

  async findAll(): Promise<Bugreport[]> {
    return await this.bugreportRepository.find()
  }

  async findOne(id: string): Promise<Bugreport> {
    const oneBugreport = await this.bugreportRepository.findOne(id)
    console.log(oneBugreport)
    if (oneBugreport == undefined) throw new NotFoundException('Bugreport not found')
    return oneBugreport
  }

  async create(bugreport: Bugreport) {
    const newBugreport = new Bugreport()
    newBugreport.text = bugreport.text
    newBugreport.title = bugreport.title
    newBugreport.author = bugreport.author
    newBugreport.assigned = bugreport.assigned
    await this.bugreportRepository.save(newBugreport)
  }

  async remove(id: string): Promise<void> {
    await this.bugreportRepository.delete(id)
  }
}
