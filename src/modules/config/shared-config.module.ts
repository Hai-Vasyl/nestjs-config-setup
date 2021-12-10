import { Module } from '@nestjs/common';
import { ConfigModule } from './config.module';

@Module({
  imports: [
    ConfigModule.register({
      // set some options
    }),
  ],
  exports: [ConfigModule],
})
export class SharedConfigModule {}
