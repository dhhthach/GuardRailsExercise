import { IsDate, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateScanResultDTO {

  @IsString()
  @ApiProperty()
  status: string;

  @IsString()
  @ApiProperty()
  repositoryName: string;
  
  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  findings: string;

  @IsDate()
  @IsOptional()
  @ApiProperty({ required: false })
  queuedAt: Date;

  @IsDate()
  @IsOptional()
  @ApiProperty({ required: false })
  finishedAt: Date;

  @IsDate()
  @IsOptional()
  @ApiProperty({ required: false })
  scanningAt: Date;

}


export class UpdateScanResultDTO {

  @IsString()
  @ApiProperty()
  status: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  repositoryName: string;
  
  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  findings: string;

  @IsDate()
  @IsOptional()
  @ApiProperty({ required: false })
  queuedAt: Date;

  @IsDate()
  @IsOptional()
  @ApiProperty({ required: false })
  finishedAt: Date;

  @IsDate()
  @IsOptional()
  @ApiProperty({ required: false })
  scanningAt: Date;

}
