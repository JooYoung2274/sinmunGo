import { Articles } from './articles.entity';
export declare class Comments {
    id: number;
    content: string;
    password: string;
    createdAt: Date;
    ArticleId: number;
    Articles: Articles;
}
