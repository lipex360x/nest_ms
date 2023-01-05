import { randomUUID } from 'node:crypto'
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm'

@Entity('notifications')
export class Notification {
  @PrimaryColumn('uuid')
  id?: string

  @Column()
  recipientId: string

  @Column()
  content: string

  @Column()
  category: string

  @Column()
  readAt?: Date

  @CreateDateColumn()
  createdAd?: Date

  @UpdateDateColumn()
  updatedAt?: Date

  constructor() {
    if (!this.id) this.id = randomUUID()
  }
}
