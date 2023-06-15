"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const httpException_filter_1 = require("./httpException.filter");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        bufferLogs: true,
    });
    const config = new swagger_1.DocumentBuilder()
        .setTitle("익명 게시판 API 문서")
        .setDescription("API 문서 입니다")
        .setVersion("1.0")
        .build();
    app.useGlobalFilters(new httpException_filter_1.HttpExceptionFilter());
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup("api", app, document);
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map