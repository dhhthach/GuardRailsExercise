import { Test, TestingModule } from '@nestjs/testing';
import { ScanResultController } from './scan-result.controller';

describe('ScanResultController', () => {
  let controller: ScanResultController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ScanResultController],
    }).compile();

    controller = module.get<ScanResultController>(ScanResultController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
