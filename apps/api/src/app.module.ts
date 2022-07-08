import { Module } from '@nestjs/common';
import { ScanResultModule } from './scan-result/scan-result.module';

@Module({
  imports: [ScanResultModule]
})
export class AppModule {}
