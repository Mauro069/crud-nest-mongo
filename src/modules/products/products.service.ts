import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from 'src/schemas/product.schema';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel('Product') private readonly productModel: Model<Product>, // Inyectamos el modelo de MongoDB
  ) {}

  // Crear un nuevo producto
  async create(createProductDto: CreateProductDto): Promise<Product> {
    const newProduct = new this.productModel(createProductDto);
    return newProduct.save(); // Guardar el nuevo producto en la base de datos
  }

  async findAll(): Promise<Product[] | { message: string }> {
    const products = await this.productModel.find().exec();

    if (products.length === 0) {
      return { message: 'No products found' }; // Devuelve un mensaje si no hay productos
    }

    return products; // Devuelve los productos si existen
  }

  // Obtener un producto por su ID
  async findOne(id: string): Promise<Product> {
    const product = await this.productModel.findById(id).exec();
    if (!product) {
      throw new NotFoundException(`Product with ID ${id} not found`); // Manejo de error si no se encuentra el producto
    }
    return product;
  }

  // Actualizar un producto
  async update(
    id: string,
    updateProductDto: UpdateProductDto,
  ): Promise<Product> {
    const updatedProduct = await this.productModel
      .findByIdAndUpdate(id, updateProductDto, { new: true })
      .exec();
    if (!updatedProduct) {
      throw new NotFoundException(`Product with ID ${id} not found`); // Manejo de error si no se encuentra el producto
    }
    return updatedProduct;
  }

  // Eliminar un producto
  async remove(id: string): Promise<Product> {
    const deletedProduct = await this.productModel.findByIdAndDelete(id).exec();
    if (!deletedProduct) {
      throw new NotFoundException(`Product with ID ${id} not found`); // Manejo de error si no se encuentra el producto
    }
    return deletedProduct;
  }
}
