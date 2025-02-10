"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const dependencyInjection_1 = require("../config/dependencyInjection");
const class_validator_1 = require("class-validator");
class AuthController {
  constructor() {
    this.authService = dependencyInjection_1.container.get("IAuthService");
  }
  register(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        const userData = req.body;
        const errors = yield (0, class_validator_1.validate)(userData);
        if (errors.length > 0) {
          res.status(400).json({ errors });
        }
        yield this.authService.register(userData);
        res.status(201).json(userData);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
    });
  }
  login(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        const { email, password } = req.body;
        const token = yield this.authService.login(email, password);
        res.status(200).json({ token });
      } catch (error) {
        res.status(401).json({ error: error.message });
      }
    });
  }
}
exports.AuthController = AuthController;
//# sourceMappingURL=authController.js.map
