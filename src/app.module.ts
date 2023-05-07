import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ConfigurationModule } from './configuration/configuration.module';
import { RedisModule } from './utils/redis';
import { ChatModule } from './chat/chat.module';
import ChatRoomEntity from './entites/chat/chatRoom.entity';
import { ChatMessageEntity } from './entites/chat/chatMessage.entity';
import { ChatUserEntity } from './entites/chat/chatUser.entity';
import { AuthModule } from './auth/auth.module';
import AuthEntity from './entites/auth.entity';
import ClassEntity from './entites/class.entity';

@Module({
  imports: [TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: "mysql",
        host: configService.get('DATABASE_HOST'),
        port: configService.get('DATABASE_PORT'),
        username: configService.get('DATABASE_USERNAME'),
        password: configService.get('DATABASE_PASSWORD'),
        database: configService.get('DATABASE_SCHEMA'),
        entities: [AuthEntity, ClassEntity, ChatRoomEntity, ChatMessageEntity, ChatUserEntity],
        synchronize: configService.get<boolean>('TYPEORM_SYBCHRONIZE')
      })
    }), 
    ConfigurationModule,
    RedisModule,
    ChatModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
