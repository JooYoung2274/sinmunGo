import { Body, Controller, Delete, Param, Post, Put, Res } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { commentCreateDto } from './dto/input/commentCreate.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { commentDeleteDto } from './dto/input/commentDelete.dto';
import { ResponseOutPut } from 'src/common/dto/response.dto';

@ApiTags('댓글')
@Controller('comments')
export class CommentsController {
    constructor(private commentsService: CommentsService) {}

    @ApiOperation({ summary: '댓글 생성' })
    @Post('create')
    async commentCreate(@Body() body: commentCreateDto): Promise<ResponseOutPut<null>> {
        await this.commentsService.commentCreate(body);
        return ResponseOutPut.OK(null);
    }

    @ApiOperation({ summary: '댓글 수정' })
    @Put('update/:commentId')
    async commentUpdate(
        @Param('commentId') commentId: number,
        @Body() body: commentCreateDto,
    ): Promise<ResponseOutPut<null>> {
        await this.commentsService.commentUpdate(commentId, body);
        return ResponseOutPut.OK(null);
    }

    @ApiOperation({ summary: '댓글 삭제' })
    @Delete('delete/:commentId')
    async commentDelete(
        @Param('commentId') commentId: number,
        @Body() body: commentDeleteDto,
    ): Promise<ResponseOutPut<null>> {
        await this.commentsService.commentDelete(commentId, body);
        return ResponseOutPut.OK(null);
    }
}
