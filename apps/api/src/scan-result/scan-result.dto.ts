import { IsDate, IsOptional, IsString } from 'class-validator';

export class CreateScanResultDTO {

  @IsString()
  status: string;

  @IsString()
  repositoryName: string;
  
  @IsString()
  @IsOptional()
  findings: string;

  @IsDate()
  @IsOptional()
  queuedAt: Date;

  @IsDate()
  @IsOptional()
  finishedAt: Date;

  @IsDate()
  @IsOptional()
  scanningAt: Date;

}


export class UpdateScanResultDTO {

  @IsString()
  status: string;

  @IsString()
  @IsOptional()
  repositoryName: string;
  
  @IsString()
  @IsOptional()
  findings: string;

  @IsDate()
  @IsOptional()
  queuedAt: Date;

  @IsDate()
  @IsOptional()
  finishedAt: Date;

  @IsDate()
  @IsOptional()
  scanningAt: Date;

}
