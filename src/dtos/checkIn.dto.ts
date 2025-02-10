import { IsNotEmpty, IsString } from "class-validator";

export class checkInDTO {
  @IsNotEmpty({ message: "La fecha es obligatoria." })
  @IsString({ message: "La fecha debe ser un texto." })
  date: string;

  @IsString({ message: "La observación debe ser un texto." })
  observation: string | null;
}
