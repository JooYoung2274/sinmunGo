import { BadRequestException, Inject, Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { IArticlesRepository } from './articles.interface';
import { articleCreateDto } from './dto/input/articleCreate.dto';
import { articleDeleteDto } from './dto/input/articleDelete.dto';

@Injectable()
export class ArticlesService implements OnApplicationBootstrap {
    constructor(@Inject(IArticlesRepository) private readonly articlesRepository: IArticlesRepository) {}

    async articleCreate(body: articleCreateDto) {
        return await this.articlesRepository.articleCreate(body);
    }

    async articleList(boardId: number) {
        return await this.articlesRepository.articleList(boardId);
    }

    async articleUpdate(articleId: number, body: articleCreateDto) {
        const { password } = body;

        await this.checkPassword(articleId, password);

        return await this.articlesRepository.articleUpdate(articleId, body);
    }

    async articleDelete(articleId: number, body: articleDeleteDto): Promise<any> {
        const { password } = body;

        await this.checkPassword(articleId, password);

        return await this.articlesRepository.articleDelete(articleId);
    }

    async checkPassword(articleId: number, password: string): Promise<any> {
        const isArticle = await this.articlesRepository.article(articleId);
        if (password !== isArticle.password) {
            throw new BadRequestException('비밀번호가 일치하지 않습니다.');
        }
    }

    onApplicationBootstrap() {
        console.log('onApplicationBootstrap 입니다');
    }
}
