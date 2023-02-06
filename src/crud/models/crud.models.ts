import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose/dist";
import { Document } from "mongoose";
import { type } from "os";

export type CrudDocument=Crud & Document
@Schema()
export class Crud{
    @Prop()
    username:string;

    @Prop()
    description:string;

    @Prop({default:Date.now})
    date_added:Date
}

export const CrudSchema=SchemaFactory.createForClass(Crud)