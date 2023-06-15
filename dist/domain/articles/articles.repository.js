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
exports.ArticlesRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const articles_entity_1 = require("../../entities/articles.entity");
const typeorm_2 = require("typeorm");
let ArticlesRepository = class ArticlesRepository {
    constructor(articlesRepository) {
        this.articlesRepository = articlesRepository;
    }
    async articleCreate(body) {
        const { title, content, password, BoardId } = body;
        const newArticle = this.articlesRepository.create();
        newArticle.title = title;
        newArticle.content = content;
        newArticle.password = password;
        newArticle.BoardId = BoardId;
        return await this.articlesRepository.save(body);
    }
    async articleList(boardId) {
        return await this.articlesRepository.find({ where: { BoardId: boardId } });
    }
    async articleUpdate(articleId, body) {
        const { title, content } = body;
        const isArticle = await this.articlesRepository.findOne({ where: { id: articleId } });
        isArticle.title = title;
        isArticle.content = content;
        return await this.articlesRepository.save(isArticle);
    }
    async article(articleId) {
        return await this.articlesRepository.findOne({ where: { id: articleId } });
    }
    async articleDelete(articleId) {
        return await this.articlesRepository.delete({ id: articleId });
    }
};
ArticlesRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(articles_entity_1.Articles)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ArticlesRepository);
exports.ArticlesRepository = ArticlesRepository;
//# sourceMappingURL=articles.repository.js.map