"use strict";
var __decorate =
  (this && this.__decorate) ||
  function (decorators, target, key, desc) {
    var c = arguments.length,
      r =
        c < 3
          ? target
          : desc === null
            ? (desc = Object.getOwnPropertyDescriptor(target, key))
            : desc,
      d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i]))
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
var __metadata =
  (this && this.__metadata) ||
  function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDTO = void 0;
const class_validator_1 = require("class-validator");
class UserDTO {}
exports.UserDTO = UserDTO;
__decorate(
  [
    (0, class_validator_1.IsNotEmpty)({ message: "El nombre es obligatorio." }),
    (0, class_validator_1.IsString)({
      message: "El nombre debe ser un texto.",
    }),
    __metadata("design:type", String),
  ],
  UserDTO.prototype,
  "name",
  void 0,
);
__decorate(
  [
    (0, class_validator_1.IsNotEmpty)({
      message: "El apellido es obligatorio.",
    }),
    (0, class_validator_1.IsString)({
      message: "El apellido debe ser un texto.",
    }),
    __metadata("design:type", String),
  ],
  UserDTO.prototype,
  "lastName",
  void 0,
);
__decorate(
  [
    (0, class_validator_1.IsNotEmpty)({
      message: "El teléfono es obligatorio.",
    }),
    (0, class_validator_1.IsNumber)(
      {},
      { message: "El teléfono debe ser un número." },
    ),
    __metadata("design:type", String),
  ],
  UserDTO.prototype,
  "phone",
  void 0,
);
__decorate(
  [
    (0, class_validator_1.IsNotEmpty)({
      message: "La dirección es obligatorio.",
    }),
    (0, class_validator_1.IsString)({
      message: "La dirección debe ser un texto.",
    }),
    __metadata("design:type", String),
  ],
  UserDTO.prototype,
  "address",
  void 0,
);
__decorate(
  [
    (0, class_validator_1.IsNotEmpty)({ message: "El estado es obligatorio." }),
    (0, class_validator_1.IsString)({
      message: "El estado debe ser un texto.",
    }),
    __metadata("design:type", String),
  ],
  UserDTO.prototype,
  "status",
  void 0,
);
__decorate(
  [
    (0, class_validator_1.IsNotEmpty)({
      message: "La entidad es obligatoria.",
    }),
    (0, class_validator_1.IsString)({
      message: "La entidad debe ser un texto.",
    }),
    __metadata("design:type", String),
  ],
  UserDTO.prototype,
  "entity",
  void 0,
);
__decorate(
  [
    (0, class_validator_1.IsNotEmpty)({ message: "El correo es obligatorio." }),
    (0, class_validator_1.IsEmail)(
      {},
      { message: "Debe ser un correo válido." },
    ),
    __metadata("design:type", String),
  ],
  UserDTO.prototype,
  "email",
  void 0,
);
__decorate(
  [
    (0, class_validator_1.IsNotEmpty)({
      message: "La contraseña es obligatoria.",
    }),
    (0, class_validator_1.MinLength)(6, {
      message: "La contraseña debe tener al menos 6 caracteres.",
    }),
    __metadata("design:type", String),
  ],
  UserDTO.prototype,
  "password",
  void 0,
);
__decorate(
  [
    (0, class_validator_1.IsNotEmpty)({ message: "La cédula es obligatoria." }),
    (0, class_validator_1.IsString)({
      message: "La cédula debe ser un texto.",
    }),
    __metadata("design:type", String),
  ],
  UserDTO.prototype,
  "document",
  void 0,
);
__decorate(
  [
    (0, class_validator_1.IsNotEmpty)({ message: "El EPS es obligatorio." }),
    (0, class_validator_1.IsString)({ message: "El EPS debe ser un texto." }),
    __metadata("design:type", String),
  ],
  UserDTO.prototype,
  "eps",
  void 0,
);
__decorate(
  [
    (0, class_validator_1.IsNotEmpty)({
      message: "La fecha de naciemiento es obligatoria.",
    }),
    (0, class_validator_1.IsString)({
      message: "La fecha de nacimiento debe ser un texto.",
    }),
    __metadata("design:type", String),
  ],
  UserDTO.prototype,
  "birthdate",
  void 0,
);
__decorate(
  [
    (0, class_validator_1.IsNotEmpty)({ message: "El rol es obligatoria." }),
    (0, class_validator_1.IsString)({ message: "El rol debe ser un número." }),
    __metadata("design:type", Number),
  ],
  UserDTO.prototype,
  "role_id",
  void 0,
);
//# sourceMappingURL=user.dto.js.map
