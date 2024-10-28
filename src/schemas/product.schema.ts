import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()  // Decorador que convierte la clase en un esquema de Mongoose
export class Product extends Document {
  
  @Prop({ required: true })  // Define que es un campo requerido en MongoDB
  name: string;

  @Prop({ required: true })  // Descripción del producto
  description: string;

  @Prop({ required: true, min: 0 })  // Precio con valor mínimo de 0
  price: number;

  @Prop({ default: Date.now })  // Fecha de creación con valor por defecto
  createdAt: Date;
}

// Generamos el esquema de Mongoose a partir de la clase Product
export const ProductSchema = SchemaFactory.createForClass(Product);
