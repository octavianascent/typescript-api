import * as jwt from 'jsonwebtoken';
import {Request, Response, NextFunction } from 'express';
import {tokenSecret} from '../utils/appConfig';

const IsAuth = (req: Request, res:Response, next:NextFunction) => {
  const authHeader = req.get('Authorization');

  if (!authHeader) {
    return res.status(401).json({error: true, message: 'Invalid Token'});
  }

  const token = authHeader.split(' ')[1];
  let decodedToken;

  try {
    decodedToken = jwt.verify(token, tokenSecret);
  } catch (err) {
    return res.status(500).json({error: true, message: 'Invalid Token'});
  }

  if (!decodedToken) {
    return res.status(401).json({error: true, message: 'Invalid Token'});
  }

  req['userId'] = decodedToken.userId;
  next();
}

export default IsAuth;