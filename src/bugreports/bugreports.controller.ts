import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common'
import { Bugreport } from './bugreport.interface'
import { BugreportsService } from './bugreports.service'
import { CreateBugreportDto } from './dto/create-bugreport.dto'
import { UpdateBugreportDto } from './dto/update-bugreport.dto'

@Controller('bugreports')
export class BugreportsController {
  constructor(private bugreportsService: BugreportsService) { }

  @Post()
  async create(@Body() createBugreportDto: CreateBugreportDto) {
    this.bugreportsService.create(createBugreportDto)
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateBugreportDto: UpdateBugreportDto) {
    console.log(`Put :id ${id}`)
    return this.bugreportsService.update(id, updateBugreportDto)
  }

  @Get()
  async findAll(): Promise<Bugreport[]> {
    return this.bugreportsService.findAll()
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Bugreport> {
    return this.bugreportsService.findById(id)
  }
}