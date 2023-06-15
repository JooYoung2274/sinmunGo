import { Comments } from './comments.entity';
import { Boards } from './boards.entity';
export declare class Articles {
    id: number;
    title: string;
    content: string;
    password: string;
    createdAt: Date;
    Comments: Comments[];
    BoardId: number;
    Boards: Boards;
}
