import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';

/**
 * `PartialType` convierte todos los campos de `CreateProductDto` en opcionales.
 * Esto es útil para la actualización parcial de productos, ya que permite
 * enviar solo los campos que se desean actualizar en lugar de requerir todos.
 */
export class UpdateProductDto extends PartialType(CreateProductDto) {}
