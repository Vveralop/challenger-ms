import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { BadRequestException, ValidationPipe } from '@nestjs/common';
import { ValidationExceptionFilter } from './domain/exceptions/exception.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
      exceptionFactory: (errors) => {
        const messages = errors
          .filter((error) => !!error.constraints)
          .map((error) => Object.values(error.constraints).join(', '));

        return new BadRequestException(messages);
      },
    }),
  );
  app.useGlobalFilters(new ValidationExceptionFilter());
  app.setGlobalPrefix(process.env.API_PREFIX || 'challenge-ms/v1');
  await app.listen(3000);
}
bootstrap();
