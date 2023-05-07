import { InjectRepository } from '@nestjs/typeorm';
import { SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Namespace, Socket } from 'socket.io';
import AuthEntity from 'src/entites/auth.entity';
import { ChatMessageEntity } from 'src/entites/chat/chatMessage.entity';
import ChatRoomEntity from 'src/entites/chat/chatRoom.entity';
import { ChatUserEntity } from 'src/entites/chat/chatUser.entity';
import { Repository } from 'typeorm';

@WebSocketGateway(3001, {
  namespace: 'chat',
  cors: true
})
export class ChatGateway {
  constructor(
    @InjectRepository(AuthEntity)
    private authRepository: Repository<AuthEntity>,
    @InjectRepository(ChatRoomEntity)
    private chatRoomRepository: Repository<ChatRoomEntity>,
    @InjectRepository(ChatMessageEntity)
    private chatMessageRepository: Repository<ChatMessageEntity>,
    @InjectRepository(ChatUserEntity)
    private chatUserEntity: Repository<ChatUserEntity>
  ) {};

  @WebSocketServer() nsp: Namespace;

  userCheck(token: string) {
    
  }

  @SubscribeMessage('getRoom')
  handleMessage(client: Socket, payload: any) {
    
  }
}
