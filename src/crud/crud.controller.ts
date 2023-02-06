import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Put } from '@nestjs/common/decorators';
import { CrudService } from './crud.service';
import { CreateCrudDto } from './dto/create-crud.dto';
import { UpdateCrudDto } from './dto/update-crud.dto';
import { Crud } from './models/crud.models';

@Controller('crud')
export class CrudController {
  constructor(private readonly crudService: CrudService) {}

  @Post()
  async createCrud(@Body() CrudDto: Crud) {
    return this.crudService.createCrud(CrudDto);
  }

  @Get()
  readCrud(){
    return this.crudService.readCrud()
  }

 @Put(':id')
  async updateCrud(@Param('id') id: string, @Body() updateDto: UpdateCrudDto):Promise<Crud> {
    return this.crudService.updateCrud(id, updateDto);
  }


   @Delete(':id')
  async deleteCrud(@Param('id') id: string) {
    return this.crudService.deleteCrud(id);
  }
}
