import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { BugreportsService } from './bugreports.service'
import { Bugreport } from '../entitys/bugreports.entity'

@Controller('bugreports')
export class BugreportsController {
  constructor(private bugreportsService: BugreportsService) { }

  @Post()
  async create(@Body() newBugreport: Bugreport) {
    await this.bugreportsService.create(newBugreport)
  }

  // @Put(':id')
  // async update(@Param('id') id: string, @Body() updateBugreportDto: UpdateBugreportDto) {
  //   return this.bugreportsService.update(id, updateBugreportDto)
  // }

  @Get()
  async findAll(): Promise<Bugreport[]> {
    return this.bugreportsService.findAll()
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Bugreport> {
    return this.bugreportsService.findOne(id)
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.bugreportsService.remove(id)
  }
}
