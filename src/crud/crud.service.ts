import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose/dist';
import { CreateCrudDto } from './dto/create-crud.dto';
import { UpdateCrudDto } from './dto/update-crud.dto';
import { Crud, CrudDocument } from './models/crud.models';
import { Model } from 'mongoose';
@Injectable()
export class CrudService {
  constructor(
    @InjectModel('crud') private readonly crudModel: Model<CrudDocument>,
  ) {}

  async createCrud(crud: Crud): Promise<Crud> {
    const newCrud = new this.crudModel(crud);

    return newCrud.save();
  }

  async readCrud() {
    return this.crudModel.find({})
    .then((user)=>{return user})
    .catch((err)=>console.log(err)
    )
  }

  async updateCrud(id,data):Promise<Crud>{
    return this.crudModel.findByIdAndUpdate(id,data,{new:true})
  }


  async deleteCrud(id){
    return this.crudModel.findByIdAndRemove(id)
  }
}
