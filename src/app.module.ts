import { Module } from '@nestjs/common';
import { PrismaModule } from './infrastructure/persistence/prisma/prisma.module';
import { ContractModule } from './infrastructure/contract.module';
import { ConfigModule } from '@nestjs/config';
import databaseConfig from './infrastructure/config/database.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [databaseConfig],
      isGlobal: true,
    }),
    PrismaModule,
    ContractModule,
    ConfigModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
