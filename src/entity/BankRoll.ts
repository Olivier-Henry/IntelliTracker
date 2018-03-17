import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";


@Entity()
export default class BankRoll{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'double'})
    amount: number;

    @Column({type: 'datetime'})
    date: Date;

}