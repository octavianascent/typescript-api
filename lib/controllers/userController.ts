import {Request, Response} from "express";
import UserModel from '../models/User';
import * as jwt from 'jsonwebtoken';
import {tokenSecret} from '../utils/appConfig';

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

  public async login (req: Request, res: Response) {
    const {email, password} = req.body;

    const user = await UserModel.findOne({
      where: {email: email}
    });

    const matchingPasswords = await user.comparePasswords(password);

    if (!matchingPasswords) {
      return res.status(400).json({message: 'Password or email invalid'});
    }

    const token = jwt.sign(
      {
        email: user.email,
        userId: user.id
      },
      tokenSecret,
      { expiresIn: '1h' }
    );

    res.status(200).json({message: 'Welcome', token: token});
  }
}

export default new UserController();