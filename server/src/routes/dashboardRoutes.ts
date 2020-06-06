import { Router } from 'express';
import { dashboardController } from '../controllers/dashboardControllers';

class DashboardRoutes {

    public router = Router();

    constructor(){
        this.config();
    }

    config():void {
        this.router.get('/tUserActive', dashboardController.tUserActive);
        this.router.get('/tUserInactive', dashboardController.tUserInactive);
        this.router.get('/uByArea', dashboardController.uByArea);
        
    }
}

const usuariosRoutes = new DashboardRoutes();
export default usuariosRoutes.router; 