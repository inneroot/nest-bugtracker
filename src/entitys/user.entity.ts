import { Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn } from 'typeorm';
import { Bugreport } from './bugreports.entity';


export enum UserRole {
  ADMIN = "admin",
  TETHLEAD = "techlead",
  DEVELOPER = "developer",
  TESTER = "tester",
  GHOST = 'ghost'
}

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({ length: 50 })
  name: string;

  @Column({
    type: "enum",
    enum: UserRole,
    default: UserRole.GHOST
  })
  role: UserRole

  @OneToMany(() => Bugreport, bugreport => bugreport.author)
  bugreports: Bugreport[];

  @OneToMany(() => Bugreport, bugreport => bugreport.assigned)
  assignments: Bugreport[];

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @CreateDateColumn({ type: 'timestamp' })
  updatedAt: Date;
}