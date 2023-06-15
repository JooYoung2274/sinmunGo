import { IArticlesRepository } from './articles.interface';
import { articleCreateDto } from './dto/input/articleCreate.dto';
import { articleDeleteDto } from './dto/input/articleDelete.dto';
export declare class ArticlesService {
    private readonly articlesRepository;
    constructor(articlesRepository: IArticlesRepository);
    articleCreate(body: articleCreateDto): Promise<any>;
    articleList(boardId: number): Promise<any>;
    articleUpdate(articleId: number, body: articleCreateDto): Promise<any>;
    articleDelete(articleId: number, body: articleDeleteDto): Promise<any>;
    checkPassword(articleId: number, password: string): Promise<any>;
}
