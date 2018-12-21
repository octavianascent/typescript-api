import {Request, Response} from "express";
import UserModel from '../models/User';

class UserController {
  public register (req: Request, res: Response) {
    const {email, password} = req.body;
    const user = new UserModel({
      email: email,
      password: password
    });

    user.save();

    res.status(200).json({message: 'Created'});
  }
}

export default new UserController();