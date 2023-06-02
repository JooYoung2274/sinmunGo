import { NestFactory } from "@nestjs/core";

import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { HttpExceptionFilter } from "src/httpException.filter";
import { AppModule } from "./app.module";
import { NestExpressApplication } from "@nestjs/platform-express";

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    bufferLogs: true,
  });

  const config = new DocumentBuilder()
    .setTitle("익명 게시판 API 문서")
    .setDescription("API 문서 입니다")
    .setVersion("1.0")
    .build();

  app.useGlobalFilters(new HttpExceptionFilter());

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api", app, document);

  await app.listen(3000);
}
bootstrap();
