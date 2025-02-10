import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
  MinLength,
} from "class-validator";

export class UserDTO {
  @IsNotEmpty({ message: "El nombre es obligatorio." })
  @IsString({ message: "El nombre debe ser un texto." })
  name!: string;

  @IsNotEmpty({ message: "El apellido es obligatorio." })
  @IsString({ message: "El apellido debe ser un texto." })
  lastName!: string;

  @IsNotEmpty({ message: "El teléfono es obligatorio." })
  @IsString({ message: "El teléfono debe ser un texto." })
  phone!: string;

  @IsNotEmpty({ message: "La dirección es obligatorio." })
  @IsString({ message: "La dirección debe ser un texto." })
  address!: string;

  @IsNotEmpty({ message: "La edad es obligatorio." })
  @IsNumber({}, { message: "La edad debe ser un número." })
  age!: number;

  @IsNotEmpty({ message: "La ocupación es obligatoria." })
  @IsString({ message: "La ocupación debe ser un texto." })
  occupation!: string;

  @IsNotEmpty({ message: "El correo es obligatorio." })
  @IsEmail({}, { message: "Debe ser un correo válido." })
  email!: string;

  @IsNotEmpty({ message: "La contraseña es obligatoria." })
  @MinLength(6, { message: "La contraseña debe tener al menos 6 caracteres." })
  password?: string;

  @IsNotEmpty({ message: "El tipo de documento es obligatoria." })
  @IsString({ message: "El tipo de documento debe ser un texto." })
  typeDocument!: string;

  @IsNotEmpty({ message: "La cédula es obligatoria." })
  @IsString({ message: "La cédula debe ser un texto." })
  document!: string;

  @IsNotEmpty({ message: "El EPS es obligatorio." })
  @IsString({ message: "El EPS debe ser un texto." })
  eps!: string;

  @IsNotEmpty({ message: "La fecha de naciemiento es obligatoria." })
  @IsString({ message: "La fecha de nacimiento debe ser un texto." })
  birthdate!: string;
}
