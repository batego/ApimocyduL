import  { Request, Response } from 'express';

class IndexController{

    public index(req:Request, res: Response){
        res.json({text: 'API Home'});
    }
}

export const indexController = new IndexController();