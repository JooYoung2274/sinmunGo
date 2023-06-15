import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { articleCreateDto } from './dto/input/articleCreate.dto';
import { articleDeleteDto } from './dto/input/articleDelete.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ResponseOutPut } from 'src/common/dto/response.dto';
import { Articles } from 'src/entities/articles.entity';

@ApiTags('게시글')
@Controller('articles')
export class ArticlesController {
    constructor(private articlesService: ArticlesService) {}

    @ApiOperation({ summary: '게시글 생성' })
    @Post('create')
    async articleCreate(@Body() body: articleCreateDto): Promise<ResponseOutPut<null>> {
        await this.articlesService.articleCreate(body);
        return ResponseOutPut.OK(null);
    }

    @ApiOperation({ summary: '게시글 리스트 불러오기' })
    @Get('list/:boardId')
    async articleList(@Param('boardId') boardId: number): Promise<ResponseOutPut<Articles[]>> {
        const result = await this.articlesService.articleList(boardId);
        return ResponseOutPut.OK(result);
    }

    @ApiOperation({ summary: '게시글 수정' })
    @Put('update/:articleId')
    async articleUpdate(
        @Param('articleId') articleId: number,
        @Body() body: articleCreateDto,
    ): Promise<ResponseOutPut<null>> {
        await this.articlesService.articleUpdate(articleId, body);
        return ResponseOutPut.OK(null);
    }

    @ApiOperation({ summary: '게시글 삭제' })
    @Delete('delete/:articleId')
    async articleDelete(
        @Param('articleId') articleId: number,
        @Body() body: articleDeleteDto,
    ): Promise<ResponseOutPut<null>> {
        await this.articlesService.articleDelete(articleId, body);
        return ResponseOutPut.OK(null);
    }
}
