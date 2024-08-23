import { IsDateString, IsNumber, IsString } from 'class-validator';

export class ContractDto {
  @IsString()
  clientname: string;

  @IsString()
  email: string;

  @IsDateString()
  initialdate: Date;

  @IsString()
  accountnumber: string;

  @IsNumber()
  amount: bigint;

  @IsNumber()
  currency: number;
}
