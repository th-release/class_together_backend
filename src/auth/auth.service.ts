import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { Request, Response } from 'express';
import AuthEntity from 'src/entites/auth.entity';
import { hash } from 'src/utils/hash';
import jsonwebtoken from 'src/utils/jsonwebtoken';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(AuthEntity)
    private authRepository: Repository<AuthEntity>,
    private configService: ConfigService
  ) {};

  async getUser(req: Request, res: Response) {
    const token = req.headers.authorization.split(' ');
    const verify = jsonwebtoken.verify(token.toString(), this.configService.get('SECRET'))
    const user = this.authRepository.findOne({ 
      where: { uuid: verify.data.uuid } 
    })
    try {
      if (!token) throw new Error('invaild token')
      if (!verify) throw new Error('invaild token')
      if (!user) throw new Error('not user')
    } catch(err) {
      return res.status(401).json({
        success: false,
        message: err.message
      })
    }
    
    return res.status(200).json({
      success: true,
      user: verify
    })
  }

  async login(req: Request, res: Response) {
    const { id, password } = req.body

    try {
      if (!id) throw new Error('아이디를 입력해주세요.')
      if (!password) throw new Error('비밀번호를 입력해주세요.')
      if (id.length > 6) throw new Error('아이디는 6글자보다 길어야합니다.')
      if (password.length > 7) throw new Error('비밀번호는 8글자 이상이어야 합니다.') 
    } catch(err) {
      return res.status(400).json({
        success: false,
        message: err.message
      })
    }

    try {
      const user = await this.authRepository.findOne({
        where: [
          { username: id },
          { email: id }
        ]
      })
      if (!user) 
        throw({ 
          status: 400, message: '아이디나 비밀번호를 확인해주세요.' 
        })

      if (hash(password + user.salt) === user.password) {
        const token = jsonwebtoken.sign({ 
          uuid: user.uuid, 
          username: user.username, 
          name: user.name, 
          isWorker: user.isWorker, 
          isDisoder: user.isDisoder 
        }, this.configService.get('SECRET'))

        return res.status(201).json({
          success: true,
          token
        })
      } else throw({ 
        status: 400, message: '아이디나 비밀번호를 확인해주세요.' 
      })
    } catch (err) {
      return res.status(err.status).json({
        success: false,
        message: err.message
      })
    }
  } 

  async signUp(req: Request, res: Response) {
    const { 
      id, 
      password, 
      email, 
      phone, 
      isWorker, 
      isDisoder, 
      address 
    } = req.body


  }

  
}
