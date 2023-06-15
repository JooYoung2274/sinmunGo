import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ICommentsRepository } from './comments.interface';
import { Comments } from 'src/entities/comments.entity';
import { Repository } from 'typeorm';
import { commentCreateDto } from './dto/input/commentCreate.dto';

@Injectable()
export class CommentsRepository implements ICommentsRepository {
    constructor(@InjectRepository(Comments) private commentsRepository: Repository<Comments>) {}

    async commentCreate(body: commentCreateDto): Promise<any> {
        const { content, password, articleId } = body;
        const newComment = this.commentsRepository.create();
        newComment.content = content;
        newComment.password = password;
        newComment.ArticleId = articleId;
        return await this.commentsRepository.save(newComment);
    }

    async comment(commentId: number): Promise<any> {
        return await this.commentsRepository.findOne({ where: { id: commentId } });
    }

    async commentUpdate(commentId: number, body: commentCreateDto): Promise<any> {
        const { content } = body;
        const isComment = await this.commentsRepository.findOne({ where: { id: commentId } });
        isComment.content = content;
        return await this.commentsRepository.save(isComment);
    }

    async commentDelete(commentId: number): Promise<any> {
        return await this.commentsRepository.delete({ id: commentId });
    }
}
