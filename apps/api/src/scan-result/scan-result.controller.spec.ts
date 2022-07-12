import { BadRequestException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { ScanResultController } from './scan-result.controller';
import { CreateScanResultDTO } from './scan-result.dto';
import { ScanResultService } from './scan-result.service';

const SCAN_ID_MOCK = 'bbec8a5c-2c00-4a46-ab83-188fd2632b58';
const SCAN_RESULT_MOCK = [
  {
    "id": "bidkmt5c-2c00-4a46-ab83-188fd2632920",
    "repositoryName": "thach",
    "status": "Queued",
    "findings": null,
    "queuedAt": "2022-07-12T20:52:09.138Z",
    "finishedAt": null,
    "scanningAt": null
  },
  {
    "id": "bbec8a5c-2c00-4a46-ab83-188fd2632b58",
    "repositoryName": "test",
    "status": "Queued",
    "findings": null,
    "queuedAt": "2022-07-12T20:52:09.138Z",
    "finishedAt": null,
    "scanningAt": null
  }
];

describe('ScanResultController', () => {
  let controller: ScanResultController;
  let service: ScanResultService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ScanResultController],
      providers: [
        ScanResultService,
        {
          provide: ScanResultService,
          useValue: {
            delete: jest.fn(),
            save: jest.fn().mockImplementation(() =>
              Promise.resolve({ ...SCAN_RESULT_MOCK[0] }),
            ),
            findById: jest.fn().mockImplementation(() =>
              Promise.resolve(SCAN_RESULT_MOCK[0]),
            ),
            findAll: jest.fn().mockResolvedValue(SCAN_RESULT_MOCK)
          },
        },
      ], 
    }).compile();

    controller = module.get<ScanResultController>(ScanResultController);
    service = module.get<ScanResultService>(ScanResultService);

  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findAll()', () => {
    it('should find all scan results ', () => {
      controller.findAll();
      expect(service.findAll).toHaveBeenCalled();
    });
  });

  describe('findById()', () => {
    it('should find a scan result', () => {
      expect(controller.findById(SCAN_ID_MOCK)).resolves.toEqual(SCAN_RESULT_MOCK[0]);
      expect(service.findById).toHaveBeenCalled();
    });
  });

  describe('save()', () => {
    it('should create a scan result', () => {
      expect(controller.save(SCAN_RESULT_MOCK[0] as unknown as CreateScanResultDTO)).resolves.toEqual({
        ...SCAN_RESULT_MOCK[0]
      });
      expect(service.save).toHaveBeenCalledWith(SCAN_RESULT_MOCK[0]);
    });
  });

  describe('deleteById()', () => {
    it('should delete the scan result if id is valid', () => {
      controller.deleteById(SCAN_ID_MOCK);
      expect(service.delete).toHaveBeenCalled();
    });
    it('should throw exception if id is invalid', () => {
      expect(() => controller.deleteById('invalid')).toThrow(BadRequestException);
    });
  });

});
