import { Test, TestingModule } from '@nestjs/testing';
import { ScanResultService } from './scan-result.service';

describe('ScanResultService', () => {
  let service: ScanResultService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ScanResultService],
    }).compile();

    service = module.get<ScanResultService>(ScanResultService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
