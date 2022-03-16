import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Message {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  nick: string;
  
  @Column()
  mensaje: string;
}
