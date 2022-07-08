import { Controller, Get } from '@nestjs/common';
import { ScanResultService } from './scan-result.service';

@Controller('scan-results')
export class ScanResultController {

  constructor(private scanResultService: ScanResultService) {}

  @Get()
  findAll() {
    return this.scanResultService.retrieveAll();
  }

}
