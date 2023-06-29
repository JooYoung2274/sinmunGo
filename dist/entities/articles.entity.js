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
exports.Articles = void 0;
const typeorm_1 = require("typeorm");
const comments_entity_1 = require("./comments.entity");
const boards_entity_1 = require("./boards.entity");
let Articles = class Articles {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int', name: 'id' }),
    __metadata("design:type", Number)
], Articles.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'title' }),
    __metadata("design:type", String)
], Articles.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'content' }),
    __metadata("design:type", String)
], Articles.prototype, "content", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'password' }),
    __metadata("design:type", String)
], Articles.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Articles.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => comments_entity_1.Comments, comments => comments.Articles),
    __metadata("design:type", Array)
], Articles.prototype, "comments", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'boardId', nullable: true }),
    __metadata("design:type", Number)
], Articles.prototype, "boardId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => boards_entity_1.Boards, Board => Board.articles, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)([{ name: 'boardId', referencedColumnName: 'id' }]),
    __metadata("design:type", boards_entity_1.Boards)
], Articles.prototype, "Boards", void 0);
Articles = __decorate([
    (0, typeorm_1.Entity)('Articles')
], Articles);
exports.Articles = Articles;
//# sourceMappingURL=articles.entity.js.map