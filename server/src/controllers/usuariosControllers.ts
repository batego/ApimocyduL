import  { Request, Response } from 'express';
import poll from '../database';


class UsuariosControllers{

    public list(req: Request, res: Response) {
        let { eventId, eventName, sentDate } = req.body
        let { orderId, url, text, host, port, user, password, remotePath, fileName, txtName } = req.body.payload;
        console.log(req.body);
        poll.query('call processonBase(?,?,@valido);', [eventId,eventName]).then((rows) =>{
            // console.log(rows[0].length);
            res.json(rows[0]);
        });
        //res.json(games);
    }

    public getOne(req: Request, res: Response) {
        const { codigo } = req.params;
        poll.query('SELECT * FROM usuarios where numero_documento = ?', [codigo]).then((items) => {
            res.json(items[0]);
        });
        //res.json('areass:  '+ req.params.id );
    }

    public  create(req: Request, res: Response) {
        poll.query('INSERT INTO usuarios set ?',[req.body]).then((rows) =>{
             console.log(rows);
        });
        console.log(req.body);
        res.json({ message: 'Usuarios Saved' });
    }

    public async update(req: Request, res: Response): Promise<void> {        
        const { codigo } = req.params;
        await poll.query('update usuarios set ? where numero_documento = ?',[req.body, codigo]);
        res.json({message: 'The Usuarios was save'});
    }

    public async delete(req: Request, res: Response): Promise<void>  {
        const { codigo } = req.params;
        await poll.query('delete from usuarios where numero_documento = ?',[codigo]).catch(err =>{
            res.json({Error:err})
        });
        res.json({ text: 'The Usuario was deleted: '+ req.params.codigo });
    }
}

export const usuariosController = new UsuariosControllers();