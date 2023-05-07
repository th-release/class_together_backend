import { Module } from '@nestjs/common';
import { ChatGateway } from './chat.gateway';
import { TypeOrmModule } from '@nestjs/typeorm';
import ChatRoomEntity from 'src/entites/chat/chatRoom.entity';
import { ChatMessageEntity } from 'src/entites/chat/chatMessage.entity';
import { ChatUserEntity } from 'src/entites/chat/chatUser.entity';
import AuthEntity from 'src/entites/auth.entity';

@Module({
  imports: [TypeOrmModule.forFeature([
    AuthEntity, 
    ChatRoomEntity, 
    ChatMessageEntity, 
    ChatUserEntity
  ])],
  exports: [TypeOrmModule],
  providers: [ChatGateway]
})
export class ChatModule {}
