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
exports.CommentsService = void 0;
const common_1 = require("@nestjs/common");
const comments_interface_1 = require("./comments.interface");
let CommentsService = class CommentsService {
    constructor(commentsRepository) {
        this.commentsRepository = commentsRepository;
    }
    async commentCreate(body) {
        return await this.commentsRepository.commentCreate(body);
    }
    async commentUpdate(commentId, body) {
        const { password } = body;
        const isComment = await this.commentsRepository.comment(commentId);
        if (password !== isComment.password) {
            throw new common_1.BadRequestException('비밀번호가 일치하지 않습니다.');
        }
        return await this.commentsRepository.commentUpdate(commentId, body);
    }
    async commentDelete(commentId, body) {
        const { password } = body;
        const isComment = await this.commentsRepository.comment(commentId);
        if (password !== isComment.password) {
            throw new common_1.BadRequestException('비밀번호가 일치하지 않습니다.');
        }
        return await this.commentsRepository.commentDelete(commentId);
    }
    onModuleDestroy() {
        console.log('onModuleDestroy 입니다');
    }
};
CommentsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(comments_interface_1.ICommentsRepository)),
    __metadata("design:paramtypes", [Object])
], CommentsService);
exports.CommentsService = CommentsService;
//# sourceMappingURL=comments.service.js.map