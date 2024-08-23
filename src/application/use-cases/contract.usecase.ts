import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { Contract } from '@prisma/client';
import { ContractDto } from '../../infrastructure/dto/contract/contract-input.dto';
import { ContractService } from '../../infrastructure/services/contract/contract.service';

@Injectable()
export class ContractUseCase {
  constructor(private readonly contractService: ContractService) {}

  async saveContract(body: ContractDto): Promise<Contract | any> {
    try {
      const data = await this.contractService.saveContract(body);
      if (!data) throw new InternalServerErrorException();
      return {
        id: data.id,
        clientName: data.clientname,
        email: data.email,
        accountNumber: data.accountnumber,
        amount: data.amount.toString(),
        currency: data.currency,
      };
    } catch (ex) {
      throw new Error(`${ex.message}.`);
    }
  }

  async findContract(
    accountNumber: string,
    startDate: string,
    endDate: string,
  ): Promise<Contract[] | any> {
    try {
      const data = await this.contractService.findContract(
        accountNumber,
        startDate,
        endDate,
      );
      if (!data) throw new NotFoundException();

      const convertedData = data.map((item) => ({
        ...item,
        amount: item.amount.toString(),
      }));

      return convertedData;
    } catch (ex) {
      throw new Error(`Find roles error: ${ex.message}.`);
    }
  }
}
