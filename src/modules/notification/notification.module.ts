import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { Notification } from './infra/database/typeorm/entities'

@Module({
  imports: [TypeOrmModule.forFeature([Notification])],
})
export class NotificationModule {}
