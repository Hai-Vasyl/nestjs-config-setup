import { Module } from '@nestjs/common';

import { ConfigService } from './config.service';
import { DecryptService } from './decrypt.service';

@Module({
  providers: [ConfigService, DecryptService],
  exports: [ConfigService],
})
export class ConfigModule {}
