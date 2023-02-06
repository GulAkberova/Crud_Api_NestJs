import { Injectable } from "@nestjs/common"


@Injectable()
export class ProductsService{
   getPosts():Promise<Array<number>>{
    return new Promise<Array<number>>((resolve=>{
        setTimeout(()=>{
            resolve([1,2,3,4,5])

        },3000)
    }))
   

   }

}