import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ConfigModule } from './modules/config/config.module';
import { ConfigService } from './modules/config/config.service';
import { FeatureModule } from './modules/feature/feature.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: configService.getConfigByKey('db_username'),
        password: configService.getConfigByKey('db_password'),
        database: configService.getConfigByKey('db_name'),
        entities: ['dist/**/*.entity{.ts,.js}'],
        synchronize: false,
      }),
      inject: [ConfigService],
    }),
    ConfigModule,
    FeatureModule,
  ],
})
export class AppModule {}
