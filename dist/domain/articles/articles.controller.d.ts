import { ArticlesService } from './articles.service';
import { articleCreateDto } from './dto/input/articleCreate.dto';
import { articleDeleteDto } from './dto/input/articleDelete.dto';
import { ResponseOutPut } from 'src/common/dto/response.dto';
import { Articles } from 'src/entities/articles.entity';
export declare class ArticlesController {
    private articlesService;
    constructor(articlesService: ArticlesService);
    articleCreate(body: articleCreateDto): Promise<ResponseOutPut<null>>;
    articleList(boardId: number): Promise<ResponseOutPut<Articles[]>>;
    articleUpdate(articleId: number, body: articleCreateDto): Promise<ResponseOutPut<null>>;
    articleDelete(articleId: number, body: articleDeleteDto): Promise<ResponseOutPut<null>>;
}
