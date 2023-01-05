import { DynamicModule, Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { TypeOrmConfig } from './typeorm.config'

@Module({})
export class DatabaseModule {
  static register() {
    const connection = TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfig,
    })

    return {
      module: DatabaseModule,
      imports: [connection],
    } as DynamicModule
  }
}
