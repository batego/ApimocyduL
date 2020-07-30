import { Router } from 'express';
import { usuariosController } from '../controllers/usuariosControllers';

class UsuariosRoutes {

    public router = Router();

    constructor(){
        this.config();
    }

    config():void {
        this.router.post('/list', usuariosController.list);
        this.router.get('/getone/:codigo', usuariosController.getOne);
        this.router.post('/create', usuariosController.create);
        this.router.put('/update/:codigo', usuariosController.update);
        this.router.delete('/delete/:codigo', usuariosController.delete);
    }
}

const usuariosRoutes = new UsuariosRoutes();
export default usuariosRoutes.router; 