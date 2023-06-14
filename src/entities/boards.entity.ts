import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Articles } from "./articles.entity";

@Entity("Boards")
export class Boards {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "title" })
  title: string;

  @OneToMany(() => Articles, (articles) => articles.Boards)
  Articles: Articles[];
}
