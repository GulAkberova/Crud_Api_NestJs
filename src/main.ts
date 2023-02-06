import { NestFactory } from '@nestjs/core';
import { NextFunction, Request, Response } from 'express';
import { AppModule } from './app.module';

// export function logger(req:Request, res:Response,next:NextFunction){
//   console.log('Request Global');

//   next()
  
// }

async function bootstrap() {
  const app = await NestFactory.create(AppModule);


  // app.use(logger)
  await app.listen(3000);
}
bootstrap();
