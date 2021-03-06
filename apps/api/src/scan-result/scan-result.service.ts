import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ScanResult } from './scan-result.entity';
import { v4 as uuidV4 } from 'uuid';
import { CreateScanResultDTO, UpdateScanResultDTO } from './scan-result.dto';
import { ScanStatus } from './scan-result.interface';

@Injectable()
export class ScanResultService {

  constructor(
    @InjectRepository(ScanResult)
    private scanResultRepository: Repository<ScanResult>,
  ) {}

  private timestampMap = {
    [ScanStatus.QUEUED]: 'queuedAt',
    [ScanStatus.IN_PROGRESS]: 'scanningAt',
    [ScanStatus.FAILURE]: 'finishedAt',
    [ScanStatus.SUCCESS]: 'finishedAt'
  }

  async save(scanResultPayload: CreateScanResultDTO) {
    const id = uuidV4();
    const emptyScanResult = this.scanResultRepository.create();
    await this.scanResultRepository.save({
      ...emptyScanResult, 
      ...scanResultPayload,
      id,
      [this.timestampMap[scanResultPayload.status]]: new Date().toISOString()
    });
    return this.scanResultRepository.findOneByOrFail({ id });
  }

  async update(id: string, scanResultPayload: UpdateScanResultDTO) {
    await this.scanResultRepository.update(id, scanResultPayload);
    let scanResult = null;
    try {
      scanResult = await this.scanResultRepository.findOneByOrFail({ id });
    } catch (e) {
      throw new NotFoundException();
    }
    return scanResult;
  }

  delete(id: string) {
    return this.scanResultRepository.delete(id);
  }

  findAll(): Promise<ScanResult[]> {
    return this.scanResultRepository.find();
  }

  findById(id: string) {
    return this.scanResultRepository.findOneByOrFail({ id });
  }

}
