import { Injectable, NotFoundException } from '@nestjs/common'
import { Bugreport } from './bugreport.interface'

@Injectable()
export class BugreportsService {
  private readonly bugreports: Bugreport[] = []

  private invalidId(id: string) {
    return isNaN(+id) || +id < 0 || +id > this.bugreports.length
  }

  create(bugreport: Bugreport) {
    this.bugreports.push({ id: this.bugreports.length + 1, ...bugreport })
  }

  update(id: string, bugreport: Bugreport): Bugreport {
    if (this.invalidId(id)) {
      throw new NotFoundException(`invalid ID ${+id}`)
    }
    this.bugreports[+id - 1] = { id: +id, ...bugreport }
    return this.bugreports[+id - 1]
  }

  findById(id: string): Bugreport {
    if (this.invalidId(id)) {
      throw new NotFoundException(`invalid ID ${+id}`)
    }
    return this.bugreports[+id - 1]
  }

  findAll(): Bugreport[] {
    return this.bugreports
  }

  delete(id: string) {
    if (this.invalidId(id)) {
      throw new NotFoundException(`invalid ID ${+id}`)
    }
    this.bugreports.splice(+id - 1, 1)
  }
}
