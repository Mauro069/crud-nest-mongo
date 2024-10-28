import { IsNotEmpty, IsNumber, IsString, Min } from 'class-validator';

/**
 * Un DTO sirve para:
 *
 * 1. Definir la estructura de los datos que se esperan en una solicitud o respuesta.
 * 2. Validar los datos antes de que entren en el sistema (antes de llegar a tu lógica de negocio).
 * 3. Proporcionar tipado en TypeScript, lo que ayuda a evitar errores y mejorar la autocompletación en los editores de código.
 */

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsNumber()
  @Min(0)
  price: number;
}
