"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const areasControllers_1 = require("../controllers/areasControllers");
class AreasRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/list', areasControllers_1.areasController.list);
        this.router.get('/getone/:codigo', areasControllers_1.areasController.getOne);
        this.router.post('/create', areasControllers_1.areasController.create);
        this.router.put('/update/:codigo', areasControllers_1.areasController.update);
        this.router.delete('/delete/:codigo', areasControllers_1.areasController.delete);
    }
}
const areasRoutes = new AreasRoutes();
exports.default = areasRoutes.router;
