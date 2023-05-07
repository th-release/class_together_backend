import { Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import AuthEntity from "../auth.entity";
import ChatRoomEntity from "./chatRoom.entity";
import { ChatMessageEntity } from "./chatMessage.entity";

@Entity({ name: 'chatUserEntity' })
export class ChatUserEntity {
  @PrimaryGeneratedColumn('uuid')
  uuid: number;

  @ManyToOne(type => AuthEntity, user => user.username)
  @JoinColumn({ name: 'username', referencedColumnName: 'username' })
  username: string;

  @ManyToMany(() => ChatRoomEntity, chatRoom => chatRoom.users)
  chatRooms: ChatRoomEntity[];

  @OneToMany(() => ChatMessageEntity, message => message.user)
  messages: ChatMessageEntity[];
}