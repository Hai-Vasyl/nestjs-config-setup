import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ConfigService } from './modules/config/config.service';
import { SharedConfigModule } from './modules/config/shared-config.module';
import { FeatureModule } from './modules/feature/feature.module';

@Module({
  imports: [
    SharedConfigModule,
    TypeOrmModule.forRootAsync({
      imports: [SharedConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: configService.get('db_username'),
        password: configService.get('db_password'),
        database: configService.get('db_name'),
        entities: ['dist/**/*.entity{.ts,.js}'],
        synchronize: false,
      }),
      inject: [ConfigService],
    }),
    FeatureModule,
  ],
})
export class AppModule {}
