import { Router } from 'express';
import { indexController } from '../controllers/indexControllers';

class IndexRouter {

    public router = Router();

    constructor(){
        this.config();
    }

    config():void {
        this.router.get('/', indexController.index);
    }
}

const indexRoutes = new IndexRouter();
export default indexRoutes.router; 