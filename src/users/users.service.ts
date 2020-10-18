import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entitys/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) { }

  async findAll(): Promise<User[]> {
    return await this.userRepository.find()
  }

  async findOne(id: string): Promise<User> {
    const oneUser = await this.userRepository.findOne(id)
    console.log(oneUser)
    if (oneUser == undefined) throw new NotFoundException('User not found')
    return oneUser
  }

  async create(user: User) {
    const newUser = new User()
    newUser.name = user.name
    newUser.role = user.role
    await this.userRepository.save(newUser)
  }

  async remove(id: string): Promise<void> {
    await this.userRepository.delete(id)
  }
}
