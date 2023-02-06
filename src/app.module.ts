import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModel } from './products/products.module';
import { UserController } from './user/user.controller';
import { LoggerMiddleware } from './logger/logger.middleware';
import { TestMiddleware } from './test/test.middleware';
import { CrudModule } from './crud/crud.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CrudSchema } from './crud/models/crud.models';

@Module({
  imports: [
    ProductsModel, CrudModule],
  controllers: [AppController, UserController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  
  // {
  //   path:'user',
  //   method:RequestMethod.PATCH
  // }

  // user

  configure(consumer: MiddlewareConsumer) {
    consumer.apply(TestMiddleware,LoggerMiddleware).forRoutes(AppController,UserController)
    
  }
 

}
