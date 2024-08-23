import { Module } from '@nestjs/common';
import { PrismaModule } from './infrastructure/persistence/prisma/prisma.module';
import { ContractModule } from './infrastructure/contract.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [PrismaModule, ContractModule, ConfigModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
