"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticlesController = void 0;
const common_1 = require("@nestjs/common");
const articles_service_1 = require("./articles.service");
const articleCreate_dto_1 = require("./dto/input/articleCreate.dto");
const articleDelete_dto_1 = require("./dto/input/articleDelete.dto");
const swagger_1 = require("@nestjs/swagger");
const response_dto_1 = require("../../common/dto/response.dto");
let ArticlesController = class ArticlesController {
    constructor(articlesService) {
        this.articlesService = articlesService;
    }
    async articleCreate(body) {
        await this.articlesService.articleCreate(body);
        return response_dto_1.ResponseOutPut.OK(null);
    }
    async articleList(boardId) {
        const result = await this.articlesService.articleList(boardId);
        return response_dto_1.ResponseOutPut.OK(result);
    }
    async articleUpdate(articleId, body) {
        await this.articlesService.articleUpdate(articleId, body);
        return response_dto_1.ResponseOutPut.OK(null);
    }
    async articleDelete(articleId, body) {
        await this.articlesService.articleDelete(articleId, body);
        return response_dto_1.ResponseOutPut.OK(null);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: '게시글 생성' }),
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [articleCreate_dto_1.articleCreateDto]),
    __metadata("design:returntype", Promise)
], ArticlesController.prototype, "articleCreate", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: '게시글 리스트 불러오기' }),
    (0, common_1.Get)('list/:boardId'),
    __param(0, (0, common_1.Param)('boardId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ArticlesController.prototype, "articleList", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: '게시글 수정' }),
    (0, common_1.Put)('update/:articleId'),
    __param(0, (0, common_1.Param)('articleId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, articleCreate_dto_1.articleCreateDto]),
    __metadata("design:returntype", Promise)
], ArticlesController.prototype, "articleUpdate", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: '게시글 삭제' }),
    (0, common_1.Delete)('delete/:articleId'),
    __param(0, (0, common_1.Param)('articleId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, articleDelete_dto_1.articleDeleteDto]),
    __metadata("design:returntype", Promise)
], ArticlesController.prototype, "articleDelete", null);
ArticlesController = __decorate([
    (0, swagger_1.ApiTags)('게시글'),
    (0, common_1.Controller)('articles'),
    __metadata("design:paramtypes", [articles_service_1.ArticlesService])
], ArticlesController);
exports.ArticlesController = ArticlesController;
//# sourceMappingURL=articles.controller.js.map