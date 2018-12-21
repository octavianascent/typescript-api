import * as express from "express";
import * as bodyParser from "body-parser";
import UserRoutes from './routes/userRoutes';

class App {
  public app: express.Application;
  public userRoutes: UserRoutes = new UserRoutes();

  constructor() {
    this.app = express();
    this.config();
    this.userRoutes.routes(this.app);
  }

  private config(): void {
    this.app.use(bodyParser.json());
    this.app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
      res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
      next();
    });
  }
}

export default new App().app;