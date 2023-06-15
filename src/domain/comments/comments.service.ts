import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { ICommentsRepository } from './comments.interface';
import { IArticlesRepository } from '../articles/articles.interface';
import { commentCreateDto } from './dto/input/commentCreate.dto';
import { commentDeleteDto } from './dto/input/commentDelete.dto';

@Injectable()
export class CommentsService {
    constructor(@Inject(ICommentsRepository) private readonly commentsRepository: ICommentsRepository) {}

    async commentCreate(body: commentCreateDto): Promise<any> {
        return await this.commentsRepository.commentCreate(body);
    }

    async commentUpdate(commentId: number, body: commentCreateDto) {
        const { password } = body;

        const isComment = await this.commentsRepository.comment(commentId);

        if (password !== isComment.password) {
            throw new BadRequestException('비밀번호가 일치하지 않습니다.');
        }

        return await this.commentsRepository.commentUpdate(commentId, body);
    }

    async commentDelete(commentId: number, body: commentDeleteDto): Promise<any> {
        const { password } = body;
        const isComment = await this.commentsRepository.comment(commentId);

        if (password !== isComment.password) {
            throw new BadRequestException('비밀번호가 일치하지 않습니다.');
        }

        return await this.commentsRepository.commentDelete(commentId);
    }
}
