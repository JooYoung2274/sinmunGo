import { ICommentsRepository } from './comments.interface';
import { Comments } from 'src/entities/comments.entity';
import { Repository } from 'typeorm';
import { commentCreateDto } from './dto/input/commentCreate.dto';
export declare class CommentsRepository implements ICommentsRepository {
    private commentsRepository;
    constructor(commentsRepository: Repository<Comments>);
    commentCreate(body: commentCreateDto): Promise<any>;
    comment(commentId: number): Promise<any>;
    commentUpdate(commentId: number, body: commentCreateDto): Promise<any>;
    commentDelete(commentId: number): Promise<any>;
}
