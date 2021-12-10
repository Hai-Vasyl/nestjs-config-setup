import { Injectable } from '@nestjs/common';

@Injectable()
export class DecryptService {
  getDecryptedConfigs() {
    return {
      db_username: 'root',
      db_password: '4230',
      db_name: 'test_config_db',
      secret_key: 'Some special secret',
      port: 5000,
    };
  }
}
