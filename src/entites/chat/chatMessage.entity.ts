import { Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import ChatRoomEntity from "./chatRoom.entity";
import { ChatUserEntity } from "./chatUser.entity";

@Entity({ name: 'chatMessageEntity' })
export class ChatMessageEntity {
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @Column({ name: 'content', type: 'longtext', nullable: false })
  content: string;

  @UpdateDateColumn({ name: 'updatedAt' })
  updatedAt: Date;

  @ManyToMany(() => ChatUserEntity, user => user.messages)
  user: ChatUserEntity;

  @ManyToOne(() => ChatRoomEntity, chatRoom => chatRoom.messages)
  chatRoom: ChatRoomEntity;
}