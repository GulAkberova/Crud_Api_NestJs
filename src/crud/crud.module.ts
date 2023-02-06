import { Module } from '@nestjs/common';
import { CrudService } from './crud.service';
import { CrudController } from './crud.controller';
import { CrudSchema } from './models/crud.models';
import { MongooseModule } from '@nestjs/mongoose/dist/mongoose.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://Gul:3421558Gul@cluster0.oxil0us.mongodb.net/crudNest'),
  MongooseModule.forFeature([{name:'crud',schema:CrudSchema}])],
  controllers: [CrudController],
  providers: [CrudService]
})
export class CrudModule {}
