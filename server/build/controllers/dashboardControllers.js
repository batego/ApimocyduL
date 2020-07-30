"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dashboardController = void 0;
const database_1 = __importDefault(require("../database"));
class DashboardControllers {
    tUserActive(req, res) {
        database_1.default.query('SELECT count(*) as totalactivos FROM usuarios where estado = 1;').then((rows) => {
            res.json(rows);
        });
        //res.json(games);
    }
    tUserInactive(req, res) {
        database_1.default.query('SELECT count(*) as totalinactivos FROM usuarios where estado = 0;').then((items) => {
            res.json(items);
        });
        //res.json('areass:  '+ req.params.id );
    }
    uByArea(req, res) {
        database_1.default.query('SELECT count(*) as total, a2.nombre from areas a2 inner join usuarios u on (u.area = a2.codigo) group by a2.nombre ;').then((rows) => {
            res.json(rows);
        });
    }
}
exports.dashboardController = new DashboardControllers();
