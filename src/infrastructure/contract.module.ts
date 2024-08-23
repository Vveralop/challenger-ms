import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ContractService } from './services/contract/contract.service';
import { PrismaModule } from './persistence/prisma/prisma.module';
import { PrismaService } from './persistence/prisma/prisma.service';
import { ContractController } from './controllers/contract/contract.controller';
import { ContractUseCase } from '../application/use-cases/contract.usecase';

@Module({
  imports: [PrismaModule],
  controllers: [ContractController],
  providers: [ContractUseCase, ContractService, ConfigService, PrismaService],
  exports: [ContractService],
})
export class ContractModule {}
