import {Request, Response} from "express";
import UserController from '../controllers/userController';

class UserRoutes {
  public routes(app): void {
    app.route('/')
      .get((req: Request, res: Response) => {
        res.status(200).json({message: 'Homepage'})
      });

    app.route('/register')
      .post(UserController.register);
  }
}

export default UserRoutes;