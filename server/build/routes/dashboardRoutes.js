"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const dashboardControllers_1 = require("../controllers/dashboardControllers");
class DashboardRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/tUserActive', dashboardControllers_1.dashboardController.tUserActive);
        this.router.get('/tUserInactive', dashboardControllers_1.dashboardController.tUserInactive);
        this.router.get('/uByArea', dashboardControllers_1.dashboardController.uByArea);
    }
}
const usuariosRoutes = new DashboardRoutes();
exports.default = usuariosRoutes.router;
