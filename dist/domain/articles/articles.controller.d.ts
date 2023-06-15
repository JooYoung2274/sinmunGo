import { ArticlesService } from './articles.service';
import { articleCreateDto } from './dto/input/articleCreate.dto';
import { articleDeleteDto } from './dto/input/articleDelete.dto';
export declare class ArticlesController {
    private articlesService;
    constructor(articlesService: ArticlesService);
    articleCreate(body: articleCreateDto): Promise<any>;
    articleList(boardId: number): Promise<any>;
    articleUpdate(articleId: number, body: articleCreateDto): Promise<any>;
    articleDelete(articleId: number, body: articleDeleteDto): Promise<any>;
}
