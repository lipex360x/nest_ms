import { SnakeNamingStrategy } from 'typeorm-naming-strategies'

import { Injectable } from '@nestjs/common'
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm'

@Injectable()
export class TypeOrmConfig implements TypeOrmOptionsFactory {
  createTypeOrmOptions() {
    return {
      type: 'postgres',
      applicationName: `${process.env.npm_package_name}-${process.env.NODE_ENV}`,
      keepConnectionAlive: false,
      host: process.env.TYPEORM_HOST || 'localhost',
      port: +(process.env.TYPEORM_PORT || 5432),
      username: process.env.TYPEORM_USERNAME || 'root',
      password: process.env.TYPEORM_PASSWORD || '',
      database: `${process.env.TYPEORM_DATABASE || 'nestdb'}`,
      entities: ['src/*/*.entity.ts'],
      autoLoadEntities: true,
      logging: process.env.TYPEORM_LOGGING === 'true',
      synchronize: process.env.NODE_ENV !== 'production',
      namingStrategy: new SnakeNamingStrategy(),
    } as TypeOrmModuleOptions
  }
}
