import { Controller, Get, Param, Req, Res } from '@nestjs/common';
import { Body, Delete, HttpCode, Post, Put } from '@nestjs/common/decorators';
import { Request, Response } from 'express';

@Controller('user')
export class UserController {

    @Get()
    getUser():string{
        return "Welcome User"
    }
    
    @Get('/test')
    getRRUser(@Req() req:Request, @Res() res:Response):any{
        res.json({id:1})

    }



    @Get(':id')
    findUserById(@Param('id') id:string):string{
        console.log('id',id);
        
        return id
    }

    @Post()
    @HttpCode(201)
    createUser(@Body()  data:{id: number|string, name:string}):string{
        console.log('data',data);
        return 'Yasin'
        

    }

    @Delete()
    deleteUser(@Body() data:{id:string}):string{

        return "Silindi"

    }

  

}
