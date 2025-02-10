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
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __rest =
  (this && this.__rest) ||
  function (s, e) {
    var t = {};
    for (var p in s)
      if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (
          e.indexOf(p[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(s, p[i])
        )
          t[p[i]] = s[p[i]];
      }
    return t;
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const inversify_1 = require("inversify");
const prismaClient_1 = require("../../prisma/prismaClient");
let AuthService = class AuthService {
  register(userData) {
    return __awaiter(this, void 0, void 0, function* () {
      const existingUser = yield prismaClient_1.prisma.user.findUnique({
        where: { email: userData.email },
      });
      if (existingUser) {
        throw new Error("El correo ya está registrado.");
      }
      const hashedPassword = yield bcryptjs_1.default.hash(
        userData.password || "",
        10,
      );
      const _a = yield prismaClient_1.prisma.user.create({
          data: Object.assign(Object.assign({}, userData), {
            password: hashedPassword,
          }),
        }),
        { password } = _a,
        rest = __rest(_a, ["password"]);
      return rest;
    });
  }
  login(email, password) {
    return __awaiter(this, void 0, void 0, function* () {
      const user = yield prismaClient_1.prisma.user.findUnique({
        where: { email },
      });
      if (
        !user ||
        !(yield bcryptjs_1.default.compare(password, user.password))
      ) {
        throw new Error("Credenciales incorrectas.");
      }
      const token = jsonwebtoken_1.default.sign(
        { userId: user.id },
        process.env.JWT_SECRET,
        {
          expiresIn: "1h",
        },
      );
      return token;
    });
  }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate(
  [(0, inversify_1.injectable)()],
  AuthService,
);
//# sourceMappingURL=authService.js.map
