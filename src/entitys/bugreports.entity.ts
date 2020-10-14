import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, UpdateDateColumn, CreateDateColumn } from 'typeorm'
import { User } from './user.entity'

export enum Priority {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high'
}

export enum Status {
  NEW = 'new',
  ASSIGNED = 'assigned',
  REOPENED = 'reopened',
  FIXED = 'fixed',
  CLOSED = 'closed'
}

@Entity('bugreport')
export class Bugreport {
  @PrimaryGeneratedColumn() id: string

  @Column('varchar', { length: 500, unique: true })
  title: string

  @Column('varchar', { length: 500 })
  text: string

  @Column({
    type: "enum",
    enum: Priority,
    default: Priority.LOW
  })
  priority: Priority

  @Column({
    type: "enum",
    enum: Status,
    default: Status.NEW
  })
  status: Status

  @ManyToOne(() => User, user => user.bugreports)
  author: User;

  @ManyToOne(() => User, user => user.assignments)
  assigned: User;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;
}

/*
Bug
number [id] +
title [string] +
author [user]+
created_at [date]
priority [high, medium, low] +
description [text] +
status [new, assigned, fixed, closed, reopened] +
assigned_to [user]+
*/