import { IsNotEmpty, IsString } from 'class-validator';

export class QueryDto {
  @IsNotEmpty()
  @IsString()
  accountNumber: string;

  @IsString()
  startDate: string;

  @IsString()
  endDate: string;
}
