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
exports.CommentsController = void 0;
const common_1 = require("@nestjs/common");
const comments_service_1 = require("./comments.service");
const commentCreate_dto_1 = require("./dto/input/commentCreate.dto");
const swagger_1 = require("@nestjs/swagger");
const commentDelete_dto_1 = require("./dto/input/commentDelete.dto");
const response_dto_1 = require("../../common/dto/response.dto");
let CommentsController = class CommentsController {
    constructor(commentsService) {
        this.commentsService = commentsService;
    }
    async commentCreate(body) {
        await this.commentsService.commentCreate(body);
        return response_dto_1.ResponseOutPut.OK(null);
    }
    async commentUpdate(commentId, body) {
        await this.commentsService.commentUpdate(commentId, body);
        return response_dto_1.ResponseOutPut.OK(null);
    }
    async commentDelete(commentId, body) {
        await this.commentsService.commentDelete(commentId, body);
        return response_dto_1.ResponseOutPut.OK(null);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: '댓글 생성' }),
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [commentCreate_dto_1.commentCreateDto]),
    __metadata("design:returntype", Promise)
], CommentsController.prototype, "commentCreate", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: '댓글 수정' }),
    (0, common_1.Put)('update/:commentId'),
    __param(0, (0, common_1.Param)('commentId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, commentCreate_dto_1.commentCreateDto]),
    __metadata("design:returntype", Promise)
], CommentsController.prototype, "commentUpdate", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: '댓글 삭제' }),
    (0, common_1.Delete)('delete/:commentId'),
    __param(0, (0, common_1.Param)('commentId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, commentDelete_dto_1.commentDeleteDto]),
    __metadata("design:returntype", Promise)
], CommentsController.prototype, "commentDelete", null);
CommentsController = __decorate([
    (0, swagger_1.ApiTags)('댓글'),
    (0, common_1.Controller)('comments'),
    __metadata("design:paramtypes", [comments_service_1.CommentsService])
], CommentsController);
exports.CommentsController = CommentsController;
//# sourceMappingURL=comments.controller.js.map