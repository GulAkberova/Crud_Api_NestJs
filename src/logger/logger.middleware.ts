import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    console.log('Request geldi', req.originalUrl);

    // if (req.originalUrl === '/user') {
    //   next();
    // } else {
    //   res.json({ message: 'Gecis yok ' });
    // }

    next();
  }
}
