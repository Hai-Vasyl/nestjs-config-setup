import { Inject, Injectable } from '@nestjs/common';

import { DecryptService } from './decrypt.service';

@Injectable()
export class ConfigService {
  private configs = {};

  constructor(
    @Inject('CONFIG_OPTIONS') private readonly options,
    private readonly decryptService: DecryptService,
  ) {
    // here we can configure initial setup according to injected options

    this.configs = this.decryptService.getDecryptedConfigs();
  }

  get(key: string) {
    return this.configs[key];
  }
}
