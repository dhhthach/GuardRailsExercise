import { Module } from '@nestjs/common';
import { ScanResultController } from './scan-result.controller';
import { ScanResultService } from './scan-result.service';

@Module({
  controllers: [ScanResultController],
  providers: [ScanResultService],
})
export class ScanResultModule {}
