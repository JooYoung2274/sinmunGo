import { CommentsService } from './comments.service';
import { commentCreateDto } from './dto/input/commentCreate.dto';
import { commentDeleteDto } from './dto/input/commentDelete.dto';
export declare class CommentsController {
    private commentsService;
    constructor(commentsService: CommentsService);
    commentCreate(body: commentCreateDto): Promise<any>;
    commentUpdate(commentId: number, body: commentCreateDto): Promise<any>;
    commentDelete(commentId: number, body: commentDeleteDto): Promise<any>;
}
