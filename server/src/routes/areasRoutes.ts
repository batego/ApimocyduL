import { Router } from 'express';
import { areasController } from '../controllers/areasControllers';

class AreasRoutes {

    public router = Router();

    constructor(){
        this.config();
    }

    config():void {
        this.router.get('/list', areasController.list);
        this.router.get('/getone/:codigo', areasController.getOne);
        this.router.post('/create', areasController.create);
        this.router.put('/update/:codigo', areasController.update);
        this.router.delete('/delete/:codigo', areasController.delete);
    }
}

const areasRoutes = new AreasRoutes();
export default areasRoutes.router; 