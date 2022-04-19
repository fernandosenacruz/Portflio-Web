import { Request, Response, NextFunction } from "express";
import createComment from '../service/createComment.service';

class FirstController {

  public home(req:Request, res:Response) {
    return res.json({
      response: 'Hello World'
    });
  }

  public async createComment(req:Request, res:Response, next: NextFunction): Promise<any> {
    try {
      const { code, data } = await createComment(req.body);
      
      return res.status(code).json(data);
    } catch (error) {
      next(error);
    }
  }
}

export const firstController = new FirstController();
