import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Comments } from './comments.entity';
import { Boards } from './boards.entity';

@Entity('Articles')
export class Articles {
    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    id: number;

    @Column('varchar', { name: 'title' })
    title: string;

    @Column('varchar', { name: 'content' })
    content: string;

    @Column('varchar', { name: 'password' })
    password: string;

    @CreateDateColumn()
    createdAt: Date;

    @OneToMany(() => Comments, comments => comments.Articles)
    comments: Comments[];

    @Column('int', { name: 'boardId', nullable: true })
    boardId: number;

    @ManyToOne(() => Boards, Board => Board.articles, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    })
    @JoinColumn([{ name: 'boardId', referencedColumnName: 'id' }])
    Boards: Boards;
}
