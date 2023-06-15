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
exports.ArticlesService = void 0;
const common_1 = require("@nestjs/common");
const articles_interface_1 = require("./articles.interface");
let ArticlesService = class ArticlesService {
    constructor(articlesRepository) {
        this.articlesRepository = articlesRepository;
    }
    async articleCreate(body) {
        return await this.articlesRepository.articleCreate(body);
    }
    async articleList(boardId) {
        return await this.articlesRepository.articleList(boardId);
    }
    async articleUpdate(articleId, body) {
        const { password } = body;
        await this.checkPassword(articleId, password);
        return await this.articlesRepository.articleUpdate(articleId, body);
    }
    async articleDelete(articleId, body) {
        const { password } = body;
        await this.checkPassword(articleId, password);
        return await this.articlesRepository.articleDelete(articleId);
    }
    async checkPassword(articleId, password) {
        const isArticle = await this.articlesRepository.article(articleId);
        if (password !== isArticle.password) {
            throw new common_1.BadRequestException('비밀번호가 일치하지 않습니다.');
        }
    }
};
ArticlesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(articles_interface_1.IArticlesRepository)),
    __metadata("design:paramtypes", [Object])
], ArticlesService);
exports.ArticlesService = ArticlesService;
//# sourceMappingURL=articles.service.js.map