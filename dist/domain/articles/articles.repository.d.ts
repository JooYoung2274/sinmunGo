import { IArticlesRepository } from './articles.interface';
import { Articles } from 'src/entities/articles.entity';
import { Repository } from 'typeorm';
import { articleCreateDto } from './dto/input/articleCreate.dto';
export declare class ArticlesRepository implements IArticlesRepository {
    private articlesRepository;
    constructor(articlesRepository: Repository<Articles>);
    articleCreate(body: articleCreateDto): Promise<any>;
    articleList(boardId: number): Promise<any>;
    articleUpdate(articleId: number, body: articleCreateDto): Promise<any>;
    article(articleId: number): Promise<any>;
    articleDelete(articleId: number): Promise<any>;
}
