import {Request, Response} from "express";
import UserModel from '../models/User';

class UserController {
  public async register (req: Request, res: Response) {
    const {email, password} = req.body;
    const user = new UserModel({
      email: email,
      password: password
    });

    try {
      await user.save();
    }
    catch(e) {
      return res.status(400).json({message: e.errors[0].message})
    }

    res.status(200).json({message: 'Created'});
  }
}

export default new UserController();