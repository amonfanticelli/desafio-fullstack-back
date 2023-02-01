import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { v4 as uuid } from "uuid";
import { Client } from "./clients.entities";

@Entity("contacts")
export class Contact {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column()
  fullName: string;

  @Column({ unique: true })
  email: string;

  @Column()
  cellphone: string;

  @Column()
  createdAt: Date;

  @ManyToOne(() => Client, (client) => client.contacts)
  client: Client;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
