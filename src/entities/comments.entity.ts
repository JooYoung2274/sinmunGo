import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Articles } from './articles.entity';

@Entity('Comments')
export class Comments {
    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    id: number;

    @Column('varchar', { name: 'content' })
    content: string;

    @Column('varchar', { name: 'password' })
    password: string;

    @CreateDateColumn()
    createdAt: Date;

    @Column('int', { name: 'ArticleId', nullable: true })
    ArticleId: number;

    @ManyToOne(() => Articles, Article => Article.Comments, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    })
    @JoinColumn([{ name: 'ArticleId', referencedColumnName: 'id' }])
    Articles: Articles;
}
