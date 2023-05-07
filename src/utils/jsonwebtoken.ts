import { sign, verify } from 'jsonwebtoken';
import { UserToken } from './interfaces';

class jsonwebtoken {
  static sign(user: UserToken, secret: string) {
    return sign(user, secret, {
      expiresIn: '7d',
    });
  }

  static verify(token: string, secret: string) {
    try {
      const decode = verify(token, secret) as UserToken;
      return {
        success: true,
        message: '',
        data: decode
      };
    } catch (err) {
      return undefined
    }
  }
}

export default jsonwebtoken;
