import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { ValidationPipe } from '@nestjs/common';
import { TransformInterceptor } from 'src/interceptors/transform.interceptor';
import { CacheInterceptor } from 'src/interceptors/cache.interceptor';
import { TimeoutInterceptor } from 'src/interceptors/timeout.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );
  app.useGlobalInterceptors(
    new TransformInterceptor(),
    new CacheInterceptor(),
    new TimeoutInterceptor(),
  );
  await app.listen(process.env.PORT ?? 3001);
}
bootstrap();
