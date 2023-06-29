import { OnModuleDestroy } from '@nestjs/common';
import { ICommentsRepository } from './comments.interface';
import { commentCreateDto } from './dto/input/commentCreate.dto';
import { commentDeleteDto } from './dto/input/commentDelete.dto';
export declare class CommentsService implements OnModuleDestroy {
    private readonly commentsRepository;
    constructor(commentsRepository: ICommentsRepository);
    commentCreate(body: commentCreateDto): Promise<any>;
    commentUpdate(commentId: number, body: commentCreateDto): Promise<any>;
    commentDelete(commentId: number, body: commentDeleteDto): Promise<any>;
    onModuleDestroy(): void;
}
