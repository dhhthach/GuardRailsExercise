import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateScanResultDTO } from './scan-result.dto';
import { ScanResult } from './scan-result.entity';
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

describe('ScanResultService', () => {
  let service: ScanResultService;
  let repository: Repository<ScanResult>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ScanResultService,
        {
          provide: getRepositoryToken(ScanResult),
          useValue: {
            remove: jest.fn(),
            create: jest.fn(),
            delete: jest.fn(),
            findOneByOrFail: jest.fn().mockResolvedValue(SCAN_RESULT_MOCK[0]),
            save: jest.fn(),
            find: jest.fn().mockResolvedValue(SCAN_RESULT_MOCK),
          },
        },
      ],
    }).compile();

    service = module.get<ScanResultService>(ScanResultService);
    repository = module.get<Repository<ScanResult>>(getRepositoryToken(ScanResult));

  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAll()', () => {
    it('should return an array of scan result', async () => {
      const scanResults = await service.findAll();
      expect(scanResults).toEqual(SCAN_RESULT_MOCK);
    });
  });

  describe('delete()', () => {
    it('should call delete with the passed value', async () => {
      const deleteSpy = jest.spyOn(repository, 'delete');
      await service.delete(SCAN_ID_MOCK);
      expect(deleteSpy).toBeCalledWith(SCAN_ID_MOCK);
    });
  });

  describe('save()', () => {
    it('should successfully insert a scan result', () => {
      expect(
        service.save(SCAN_RESULT_MOCK[0] as unknown as CreateScanResultDTO),
      ).resolves.toEqual(SCAN_RESULT_MOCK[0]);
      expect(repository.create).toBeCalled();
      expect(repository.save).toBeCalled();
    });
  });

  describe('findById()', () => {
    it('should get a single scan result', async () => {
      await service.findById(SCAN_ID_MOCK);
      expect(repository.findOneByOrFail).toBeCalledWith({id: SCAN_ID_MOCK});
    });
  })

});
