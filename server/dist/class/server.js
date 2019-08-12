"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const enviroment_1 = require("../global/enviroment");
class Server {
    constructor() {
        this.app = express_1.default();
        this.port = enviroment_1.SERVER_PORT;
    }
    start() {
        this.app.listen(this.port, () => {
            console.log(`El Servidor esta coprriendo por el puerto ${this.port}`);
        });
    }
}
exports.default = Server;
