import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { v4 as uuid } from "uuid";
import { Contact } from "./contacts.entities";

@Entity("clients")
export class Client {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column()
  fullName: string;

  @Column({ unique: true })
  email: string;

  @Column({ unique: true })
  cellphone: string;

  @Column()
  password: string;

  @Column({ default: true })
  isActive: boolean;

  @Column()
  createdAt: Date;

  @OneToMany(() => Contact, (contact) => contact.client, { eager: true })
  contacts: Contact[];

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
