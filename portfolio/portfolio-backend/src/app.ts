import express from "express";
import cors from "cors";
import { router } from "./router";

export class App{
  public server: express.Application;

  // public cors: cors.CorsOptions = {
  //   origin: true,
  //   methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  //   preflightContinue: false,
  //   optionsSuccessStatus: 204,
  //   credentials: true
  // };

  constructor(){
    this.server = express();
    this.server.use(cors());
    this.middleware();
    this.router();
    this.config();
  }

  private middleware(){
    this.server.use(express.json());
  }

  private router(){
    this.server.use(router);
  }

  private config(): void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };
    this.server.use(accessControl);
  }
}
