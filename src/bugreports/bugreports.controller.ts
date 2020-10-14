import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { Bugreport } from 'src/entitys/bugreports.entity'
import { BugreportsService } from './bugreports.service'
import { CreateBugreportDto } from './dto/create-bugreport.dto'
import { UpdateBugreportDto } from './dto/update-bugreport.dto'

@Controller('bugreports')
export class BugreportsController {
  constructor(private bugreportsService: BugreportsService) { }

  @Post()
  async create(@Body() createBugreportDto: CreateBugreportDto) {
    await this.bugreportsService.create(createBugreportDto)
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
