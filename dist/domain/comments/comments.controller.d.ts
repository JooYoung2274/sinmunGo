import { CommentsService } from './comments.service';
import { commentCreateDto } from './dto/input/commentCreate.dto';
import { commentDeleteDto } from './dto/input/commentDelete.dto';
import { ResponseOutPut } from 'src/common/dto/response.dto';
export declare class CommentsController {
    private commentsService;
    constructor(commentsService: CommentsService);
    commentCreate(body: commentCreateDto): Promise<ResponseOutPut<null>>;
    commentUpdate(commentId: number, body: commentCreateDto): Promise<ResponseOutPut<null>>;
    commentDelete(commentId: number, body: commentDeleteDto): Promise<ResponseOutPut<null>>;
}
