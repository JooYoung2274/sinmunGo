import { Module } from '@nestjs/common';
import { CommentsController } from './comments.controller';
import { CommentsService } from './comments.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Comments } from 'src/entities/comments.entity';
import { ICommentsRepository } from './comments.interface';
import { CommentsRepository } from './comments.repository';

@Module({
    imports: [TypeOrmModule.forFeature([Comments])],
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
