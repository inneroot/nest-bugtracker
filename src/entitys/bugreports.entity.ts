import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity('bugreport')
export class BugreportEntity {
  @PrimaryGeneratedColumn('uuid') id: string

  @Column('varchar', { length: 500, unique: true })
  title: string

  @Column('varchar', { length: 500 })
  text: string
}