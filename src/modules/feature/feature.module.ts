import { Module } from '@nestjs/common';

import { ConfigModule } from '../config/config.module';
import { FeatureController } from './feature.controller';
import { FeatureService } from './feature.service';

@Module({
  imports: [ConfigModule],
  controllers: [FeatureController],
  providers: [FeatureService],
})
export class FeatureModule {}
