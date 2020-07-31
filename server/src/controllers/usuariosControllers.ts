import { Request, Response } from 'express';
import poll from '../database';


class UsuariosControllers {

    public list(req: Request, res: Response) {
        
        let dt = new Date();
        dt.setHours(dt.getHours() + 1);
        
        let str: String = req.body.payload.remotePath;
        let index = str.lastIndexOf("/") + 1;
        
        let path = str.substring(0, index);
        req.body.payload.remotePath = path + dt.getHours();
        
        let { eventId, eventName, sentDate } = req.body
        let { orderId, url, text, host, port, user, password, remotePath, fileName, txtName } = req.body.payload;
        
        console.log(req.body.payload.remotePath);

        //antes de guardar la info setear el nombre de la carpeta con la hora actual + 1
        poll.query('call processonBase(?,?,?,?,?,?,?,?,?,?,?,?,?,@valido);', [eventId, eventName, sentDate, orderId, url, text, host, port, user, password, remotePath, fileName, txtName]).then((rows) => {
            res.json(rows[0]);
        });

    }

    public getOne(req: Request, res: Response) {
        const { codigo } = req.params;
        poll.query('SELECT * FROM usuarios where numero_documento = ?', [codigo]).then((items) => {
            res.json(items[0]);
        });
        //res.json('areass:  '+ req.params.id );
    }

    public create(req: Request, res: Response) {
        poll.query('INSERT INTO usuarios set ?', [req.body]).then((rows) => {
            console.log(rows);
        });
        console.log(req.body);
        res.json({ message: 'Usuarios Saved' });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { codigo } = req.params;
        await poll.query('update usuarios set ? where numero_documento = ?', [req.body, codigo]);
        res.json({ message: 'The Usuarios was save' });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { codigo } = req.params;
        await poll.query('delete from usuarios where numero_documento = ?', [codigo]).catch(err => {
            res.json({ Error: err })
        });
        res.json({ text: 'The Usuario was deleted: ' + req.params.codigo });
    }
}

export const usuariosController = new UsuariosControllers();