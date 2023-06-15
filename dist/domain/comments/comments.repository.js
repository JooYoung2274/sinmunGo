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
exports.CommentsRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const comments_entity_1 = require("../../entities/comments.entity");
const typeorm_2 = require("typeorm");
let CommentsRepository = class CommentsRepository {
    constructor(commentsRepository) {
        this.commentsRepository = commentsRepository;
    }
    async commentCreate(body) {
        const { content, password, articleId } = body;
        const newComment = this.commentsRepository.create();
        newComment.content = content;
        newComment.password = password;
        newComment.ArticleId = articleId;
        return await this.commentsRepository.save(newComment);
    }
    async comment(commentId) {
        return await this.commentsRepository.findOne({ where: { id: commentId } });
    }
    async commentUpdate(commentId, body) {
        const { content } = body;
        const isComment = await this.commentsRepository.findOne({ where: { id: commentId } });
        isComment.content = content;
        return await this.commentsRepository.save(isComment);
    }
    async commentDelete(commentId) {
        return await this.commentsRepository.delete({ id: commentId });
    }
};
CommentsRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(comments_entity_1.Comments)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CommentsRepository);
exports.CommentsRepository = CommentsRepository;
//# sourceMappingURL=comments.repository.js.map