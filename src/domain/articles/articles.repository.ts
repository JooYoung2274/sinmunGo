import { Injectable } from '@nestjs/common';
import { IArticlesRepository } from './articles.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Articles } from 'src/entities/articles.entity';
import { Repository } from 'typeorm';
import { articleCreateDto } from './dto/input/articleCreate.dto';

@Injectable()
export class ArticlesRepository implements IArticlesRepository {
    constructor(@InjectRepository(Articles) private articlesRepository: Repository<Articles>) {}

    async articleCreate(body: articleCreateDto): Promise<any> {
        const { title, content, password, boardId } = body;
        const newArticle = this.articlesRepository.create();
        newArticle.title = title;
        newArticle.content = content;
        newArticle.password = password;
        newArticle.boardId = boardId;
        return await this.articlesRepository.save(body);
    }

    async articleList(boardId: number): Promise<any> {
        return await this.articlesRepository
            .createQueryBuilder('article')
            .where('article.boardId = :boardId', { boardId })
            .leftJoin('article.comments', 'comment')
            .select([
                'article.id',
                'article.title',
                'article.content',
                'article.createdAt',
                'comment.id',
                'comment.content',
            ])
            .getMany();
    }

    async articleUpdate(articleId: number, body: articleCreateDto): Promise<any> {
        const { title, content } = body;
        const isArticle = await this.articlesRepository.findOne({ where: { id: articleId } });
        isArticle.title = title;
        isArticle.content = content;
        return await this.articlesRepository.save(isArticle);
    }

    async article(articleId: number): Promise<any> {
        return await this.articlesRepository.findOne({ where: { id: articleId } });
    }

    async articleDelete(articleId: number): Promise<any> {
        return await this.articlesRepository.delete({ id: articleId });
    }
}
