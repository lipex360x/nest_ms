import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'

import { DatabaseModule } from './core/infra/databases'
import { NotificationModule } from './modules/notification/notification.module'

@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseModule.register(),
    NotificationModule,
  ],
})
export class AppModule {}
