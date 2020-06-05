import express, { Application } from 'express';
import indexRoutes from './routes/indexRoutes';
import areasRoutes from './routes/areasRoutes';
import usuariosRoutes  from './routes/usuariosRoutes';
import morgan from 'morgan';
import cors from 'cors';

class Server {

    public app: Application; 

    constructor() {
        this.app = express();
        this.config();
        this.routes();
               
    }

    config(): void {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev'));//con morgan puedo ver en el servidor que peticiones se hacen POST, GET, PUT DELETE
        this.app.use(cors());//con esta instancia angular puee hacer las teticiones a nuestro SERVER
        this.app.use(express.json());//recibir datos en formato JSON de aplicaciones clientes
        this.app.use(express.urlencoded({ extended: false })); //enviar datos desde un formulario
    }

    routes(): void {
        this.app.use('/', indexRoutes);
        this.app.use('/api/areas/', areasRoutes);
        this.app.use('/api/usuarios/', usuariosRoutes);
    }

    start(): void {
        this.app.listen(this.app.get('port'), () => {
            console.info(`Server Ludycom S.A running on port :`, this.app.get('port'));
        })
    }
}

const server = new Server();
server.start();