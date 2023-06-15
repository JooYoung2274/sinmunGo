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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Comments = void 0;
const typeorm_1 = require("typeorm");
const articles_entity_1 = require("./articles.entity");
let Comments = class Comments {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int', name: 'id' }),
    __metadata("design:type", Number)
], Comments.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'content' }),
    __metadata("design:type", String)
], Comments.prototype, "content", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'password' }),
    __metadata("design:type", String)
], Comments.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Comments.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'ArticleId', nullable: true }),
    __metadata("design:type", Number)
], Comments.prototype, "ArticleId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => articles_entity_1.Articles, Article => Article.Comments, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)([{ name: 'ArticleId', referencedColumnName: 'id' }]),
    __metadata("design:type", articles_entity_1.Articles)
], Comments.prototype, "Articles", void 0);
Comments = __decorate([
    (0, typeorm_1.Entity)('Comments')
], Comments);
exports.Comments = Comments;
//# sourceMappingURL=comments.entity.js.map