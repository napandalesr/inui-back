import { IsNotEmpty, IsString } from "class-validator";

export class ConsultDTO {
  @IsString({ message: "El diagnótico debe ser un texto." })
  diagnostic: string;

  @IsString({ message: "La fecha debe ser un texto." })
  date: string;

  @IsString({ message: "El tratamiento debe ser un texto." })
  treatment: string;

  @IsString({ message: "El motivo debe ser un texto." })
  reason: string;

  @IsNotEmpty({ message: "El estado es obligatorio." })
  @IsString({ message: "El estado debe ser un texto." })
  status: string;

  @IsString({ message: "El estado debe ser un texto." })
  type: string;
}
