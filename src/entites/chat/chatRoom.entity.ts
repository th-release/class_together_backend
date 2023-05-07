import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ChatUserEntity } from "./chatUser.entity";
import { ChatMessageEntity } from "./chatMessage.entity";

@Entity({ name: 'chatRoomEntity' })
export default class ChatRoomEntity {
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @Column({ name: 'name', type: 'varchar', length: 12, nullable: false })
  name: string;

  @ManyToMany(() => ChatUserEntity)
  @JoinTable()
  users: ChatUserEntity[];

  @OneToMany(() => ChatMessageEntity, message => message.chatRoom)
  messages: ChatMessageEntity[];

  @CreateDateColumn({ name: 'createdAt' })
  createdAt: Date;
}