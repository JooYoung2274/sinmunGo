import { Module } from '@nestjs/common';
import { CommentsController } from './comments.controller';
import { CommentsService } from './comments.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Comments } from 'src/entities/comments.entity';
import { ICommentsRepository } from './comments.interface';
import { CommentsRepository } from './comments.repository';
import { ArticlesModule } from '../articles/articles.module';

@Module({
    imports: [TypeOrmModule.forFeature([Comments]), ArticlesModule],
    controllers: [CommentsController],
    providers: [
        CommentsService,
        {
            provide: ICommentsRepository,
            useClass: CommentsRepository,
        },
    ],
})
export class CommentsModule {}
