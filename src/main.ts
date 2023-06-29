import { NestFactory } from '@nestjs/core';
import { HttpExceptionFilter } from 'src/httpException.filter';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
    const app = await NestFactory.create<NestExpressApplication>(AppModule, {
        bufferLogs: true,
    });
    app.enableShutdownHooks();
    app.useGlobalFilters(new HttpExceptionFilter());

    app.enableCors({
        // origin: true,
        origin: true,
        credentials: true,
    });

    await app.listen(3000);
}
bootstrap();
