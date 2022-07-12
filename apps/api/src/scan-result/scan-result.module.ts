import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScanResultController } from './scan-result.controller';
import { ScanResult } from './scan-result.entity';
import { ScanResultService } from './scan-result.service';

@Module({
  imports: [TypeOrmModule.forFeature([ScanResult])],
  controllers: [ScanResultController],
  providers: [ScanResultService],
})
export class ScanResultModule {}
