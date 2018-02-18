import {Entity, Column, PrimaryGeneratedColumn, ManyToOne} from "typeorm";
import Room from './Room';

@Entity()
export default class User{
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'text'})
    name: string;

    @Column({type: 'int'})
    roomId: number;

    @ManyToOne(type => Room, room => room.users)
    room:Room;
}