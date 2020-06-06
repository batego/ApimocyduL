import  { Request, Response } from 'express';
import poll from '../database';


class DashboardControllers{

    public tUserActive(req: Request, res: Response) {
        
        poll.query('SELECT count(*) as totalactivos FROM usuarios where estado = 1;').then((rows) =>{
            res.json(rows);
        });
        //res.json(games);
    }

    public tUserInactive(req: Request, res: Response) {
       
        poll.query('SELECT count(*) as totalinactivos FROM usuarios where estado = 0;').then((items) => {
            res.json(items);
        });
        //res.json('areass:  '+ req.params.id );
    }

    public  uByArea(req: Request, res: Response) {
        poll.query('SELECT count(*) as total, a2.nombre from areas a2 inner join usuarios u on (u.area = a2.codigo) group by a2.nombre ;').then((rows) =>{
            res.json(rows);
        });
        
    }
    
}

export const dashboardController = new DashboardControllers();