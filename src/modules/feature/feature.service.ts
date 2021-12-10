import { Injectable } from '@nestjs/common';

import { ConfigService } from '../config/config.service';

@Injectable()
export class FeatureService {
  constructor(private readonly configService: ConfigService) {}

  getSomething() {
    return this.configService.getConfigByKey('secret_key');
  }
}
