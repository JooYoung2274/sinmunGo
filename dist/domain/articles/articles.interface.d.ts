import { articleCreateDto } from './dto/input/articleCreate.dto';
export interface IArticlesRepository {
    articleCreate(body: articleCreateDto): Promise<any>;
    articleList(boardId: number): Promise<any>;
    articleUpdate(articleId: number, body: articleCreateDto): Promise<any>;
    article(articleId: number): Promise<any>;
    articleDelete(articleId: number): Promise<any>;
}
export declare const IArticlesRepository: unique symbol;
