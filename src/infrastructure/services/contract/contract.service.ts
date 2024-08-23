import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../infrastructure/persistence/prisma/prisma.service';
import { ContractDto } from '../../dto/contract/contract-input.dto';
import { Contract } from '@prisma/client';

@Injectable()
export class ContractService {
  constructor(private prisma: PrismaService) {}

  async findContract(
    accountNumber: string,
    startDate: string,
    endDate: string,
  ): Promise<Contract[] | null> {
    return this.prisma.contract.findMany({
      where: {
        accountnumber: { equals: accountNumber },
        initialdate: {
          gte: startDate ? new Date(startDate) : new Date(),
          lte: endDate ? new Date(endDate) : new Date(),
        },
      },
    });
  }

  async saveContract(data: ContractDto): Promise<Contract> {
    return this.prisma.contract.create({
      data,
    });
  }
}
