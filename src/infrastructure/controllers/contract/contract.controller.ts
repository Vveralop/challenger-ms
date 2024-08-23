import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  Post,
  Query,
  UseFilters,
  UseInterceptors,
} from '@nestjs/common';
import { ContractDto } from '../../../infrastructure/dto/contract/contract-input.dto';
import { ContractUseCase } from '../../../application/use-cases/contract.usecase';
import { ValidationExceptionFilter } from '../../../domain/exceptions/exception.service';
import { QueryDto } from '../../../infrastructure/dto/contract/contract-get.dto';

@Controller('contract')
@UseFilters(ValidationExceptionFilter)
export class ContractController {
  constructor(private readonly contractUseCase: ContractUseCase) {}

  @UseInterceptors(ClassSerializerInterceptor)
  @Post()
  async saveContract(@Body() body: ContractDto) {
    return await this.contractUseCase.saveContract(body);
  }

  @Get()
  @UseInterceptors(ClassSerializerInterceptor)
  async findById(@Query() query: QueryDto): Promise<any> {
    return await this.contractUseCase.findContract(
      query.accountNumber,
      query.startDate,
      query.endDate,
    );
  }
}
