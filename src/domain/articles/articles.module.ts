import { Module } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { ArticlesController } from './articles.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Articles } from 'src/entities/articles.entity';
import { IArticlesRepository } from './articles.interface';
import { ArticlesRepository } from './articles.repository';

@Module({
    imports: [TypeOrmModule.forFeature([Articles])],
    providers: [
        ArticlesService,
        {
            provide: IArticlesRepository,
            useClass: ArticlesRepository,
        },
    ],
    controllers: [ArticlesController],
})
export class ArticlesModule {}
