import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'; // Para manejar MongoDB
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { ProductSchema } from '../../schemas/product.schema'; // Esquema de MongoDB

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Product', schema: ProductSchema }]), // Conectar el esquema con MongoDB
  ],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
