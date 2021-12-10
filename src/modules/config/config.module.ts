import { DynamicModule, Module } from '@nestjs/common';

import { ConfigService } from './config.service';
import { DecryptService } from './decrypt.service';

@Module({})
export class ConfigModule {
  static register(options): DynamicModule {
    return {
      module: ConfigModule,
      providers: [
        {
          provide: 'CONFIG_OPTIONS',
          useValue: options,
        },
        ConfigService,
        DecryptService,
      ],
      exports: [ConfigService],
    };
  }
}
