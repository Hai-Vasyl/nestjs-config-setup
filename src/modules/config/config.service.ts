import { Injectable } from '@nestjs/common';

import { DecryptService } from './decrypt.service';

@Injectable()
export class ConfigService {
  private configs = {};

  constructor(private readonly decryptService: DecryptService) {
    this.configs = this.decryptService.getDecryptedConfigs();
  }

  getConfigByKey(key: string) {
    return this.configs[key];
  }
}
