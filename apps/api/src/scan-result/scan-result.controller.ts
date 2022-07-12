import { BadRequestException, Body, Controller, Delete, Get, HttpCode, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { ScanResultService } from './scan-result.service';
import { validate as uuidValidate } from 'uuid';
import { CreateScanResultDTO, UpdateScanResultDTO } from './scan-result.dto';

@Controller('scan-results')
export class ScanResultController {

  constructor(private scanResultService: ScanResultService) {}

  @Get()
  findAll() {
    return this.scanResultService.findAll();
  }

  @Get(':scanId')
  findById(@Param('scanId') scanId: string) {
    if (!uuidValidate(scanId)) {
      throw new BadRequestException();
    }
    return this.scanResultService.findById(scanId);
  }

  @Post()
  @HttpCode(201)
  @UsePipes(new ValidationPipe())
  save(@Body() payload: CreateScanResultDTO) {
    return this.scanResultService.save(payload);
  }

  @Delete(':scanId')
  @HttpCode(204)
  deleteById(@Param('scanId') scanId: string) {
    if (!uuidValidate(scanId)) {
      throw new BadRequestException();
    }
    return this.scanResultService.delete(scanId);
  }

  @Put(':scanId')
  @UsePipes(new ValidationPipe())
  updateById(@Param('scanId') scanId: string, @Body() payload: UpdateScanResultDTO) {
    if (!uuidValidate(scanId)) {
      throw new BadRequestException();
    }
    return this.scanResultService.update(scanId, payload);
  }

}
