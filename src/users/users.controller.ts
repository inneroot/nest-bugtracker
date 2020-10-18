import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { User } from '../entitys/user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) { }

  @Post()
  async create(@Body() newUser: User) {
    await this.usersService.create(newUser)
  }

  // @Put(':id')
  // async update(@Param('id') id: string, @Body() updateBugreportDto: UpdateBugreportDto) {
  //   return this.bugreportsService.update(id, updateBugreportDto)
  // }

  @Get()
  async findAll(): Promise<User[]> {
    return this.usersService.findAll()
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<User> {
    return this.usersService.findOne(id)
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.usersService.remove(id)
  }
}