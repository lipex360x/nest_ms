import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'

import { AppController } from './app.controller'
import { AppService } from './app.service'
import { DatabaseModule } from './core/infra/databases'

@Module({
  imports: [ConfigModule.forRoot(), DatabaseModule.register()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
