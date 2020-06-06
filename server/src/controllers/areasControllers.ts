import { Request, Response } from 'express';
import poll from '../database';
import Joi from 'joi';

class AreasControllers {

    public list(req: Request, res: Response) {

        poll.query('SELECT * FROM areas order by nombre;').then((rows) => {
            res.json(rows);
        });
        //res.json(games);
    }

    public getOne(req: Request, res: Response) {
        const { codigo } = req.params;
        poll.query('SELECT * FROM areas where codigo = ?', [codigo]).then((items) => {
            res.json(items[0]);
        });
        //res.json('areass:  '+ req.params.id );
    }

    public create(req: Request, res: Response) {

        const schema = {
            nombre: Joi.string().required().max(50),
            lider: Joi.number().integer().required(),
            estado: Joi.boolean()
        };

        Joi.validate(req.body, schema, (err, result) => {
            if (err) {
                console.log(err);
                res.send({ status: 'Error', mensaje: err.details[0].message });
            } else {
                poll.query('INSERT INTO areas set ?', [req.body]).then((rows) => {
                    console.log(rows);
                });
            }

            console.log(result);
            res.send([{ status: 'success', message: 'Area Saved' }]);

        });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { codigo } = req.params;
        const schema = {
            nombre: Joi.string().required().max(50),
            lider: Joi.number().integer().min(2).required(),
            estado: Joi.boolean()
        };

        Joi.validate(req.body, schema, (err, result) => {
            if (err) {
                console.log(err);
                res.send({ status: 'Error', mensaje: err.details[0].message });
            }
        });

        await poll.query('update areas set ? where codigo = ?', [req.body, codigo]);
        res.json({ status: 'success', message: `The area ${codigo} was updated` });


    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { codigo } = req.params;       

        await poll.query('delete from areas where codigo = ?', [codigo]).catch(err => {
            res.json({ Error: err })
        });
        res.json({ status: 'success', message: `The Area ${codigo} was deleted` });
    }
}

export const areasController = new AreasControllers();