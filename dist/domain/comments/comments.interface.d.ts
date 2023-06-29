import { commentCreateDto } from './dto/input/commentCreate.dto';
export interface ICommentsRepository {
    commentCreate(body: commentCreateDto): Promise<any>;
    comment(commentId: number): Promise<any>;
    commentUpdate(commentId: number, body: commentCreateDto): Promise<any>;
    commentDelete(commentId: number): Promise<any>;
}
export declare const ICommentsRepository: unique symbol;
