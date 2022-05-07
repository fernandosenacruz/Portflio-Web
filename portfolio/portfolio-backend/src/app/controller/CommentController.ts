import { Request, Response, NextFunction } from "express";
import createComment from '../service/createComment.service';
import getComment from '../service/getComment.service';
import updateComment from '../service/updateComment.service';
import deleteComment from '../service/deleteComment.service';

class CommentController {

  // public home(req:Request, res:Response) {
  //   return res.json({
  //     response: 'Hello World'
  //   });
  // }

  public async createComment(req:Request, res:Response, next: NextFunction): Promise<any> {
    try {
      const { code, data } = await createComment(req.body);
      
      return res.status(code).json(data);
    } catch (error) {
      next(error);
    }
  }

  public async getComment(req:Request, res:Response, next: NextFunction): Promise<any> {
    try {
      const { code, data } = await getComment();
      
      return res.status(code).json(data);
    } catch (error) {
      next(error);
    }
  }

  public async updateComment(req:Request, res:Response, next: NextFunction): Promise<any> {
    try {
      const { code, data } = await updateComment(req.params.id, req.body);
      
      return res.status(code).json(data);
    } catch (error) {
      next(error);
    }
  }

  public async deleteComment(req:Request, res:Response, next: NextFunction): Promise<any> {
    try {
      const { code, data } = await deleteComment(req.params.id);
      
      return res.status(code).json(data);
    } catch (error) {
      next(error);
    }
  }
}

export const commentController = new CommentController();
