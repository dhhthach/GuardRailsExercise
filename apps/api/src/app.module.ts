import { Module } from '@nestjs/common';
import { ScanResultModule } from './scan-result/scan-result.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScanResult } from './scan-result/scan-result.entity';

@Module({
  imports: [
    ScanResultModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'database',
      port: 5432,
      username: 'postgres',
      password: 'p@ssword',
      database: 'guardrails',
      entities: [ScanResult],
    }),
  ],
})
export class AppModule {}
