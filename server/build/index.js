"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const areasRoutes_1 = __importDefault(require("./routes/areasRoutes"));
const usuariosRoutes_1 = __importDefault(require("./routes/usuariosRoutes"));
const dashboardRoutes_1 = __importDefault(require("./routes/dashboardRoutes"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan_1.default('dev')); //con morgan puedo ver en el servidor que peticiones se hacen POST, GET, PUT DELETE
        this.app.use(cors_1.default()); //con esta instancia angular puee hacer las teticiones a nuestro SERVER
        this.app.use(express_1.default.json()); //recibir datos en formato JSON de aplicaciones clientes
        this.app.use(express_1.default.urlencoded({ extended: false })); //enviar datos desde un formulario
    }
    routes() {
        this.app.use('/', indexRoutes_1.default);
        this.app.use('/api/areas/', areasRoutes_1.default);
        this.app.use('/api/usuarios/', usuariosRoutes_1.default);
        this.app.use('/api/dashboard/', dashboardRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.info(`Server Ludycom S.A running on port :`, this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
