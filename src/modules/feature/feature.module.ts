import { Module } from '@nestjs/common';

import { SharedConfigModule } from '../config/shared-config.module';
import { FeatureController } from './feature.controller';
import { FeatureService } from './feature.service';

@Module({
  imports: [SharedConfigModule],
  controllers: [FeatureController],
  providers: [FeatureService],
})
export class FeatureModule {}
