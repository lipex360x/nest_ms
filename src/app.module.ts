import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'

import { DatabaseModule } from './core/infra/databases'

@Module({
  imports: [ConfigModule.forRoot(), DatabaseModule.register()],
})
export class AppModule {}
