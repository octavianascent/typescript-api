import {Request, Response, NextFunction} from "express";
import UserController from '../controllers/userController';
import isAuth from '../middleware/isAuth';
import app from "app";

class UserRoutes {
  public routes(app): void {
    app.route('/')
      .get((req: Request, res: Response) => {
        res.status(200).json({message: 'Homepage'})
      });

    app.route('/register')
      .post(UserController.register);
    app.route('/login')
      .post(UserController.login);
    app.route('/some-route')
      .get(isAuth, (req: Request, res: Response) => {
        res.status(200).json({message: `Auth Middleware, ${req['userId']}`})
      });
  }
}

export default UserRoutes;