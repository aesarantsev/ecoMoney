import { Request, Response, NextFunction } from 'express'
import winston from 'winston'


export default function(err: any, req: Request, res: Response, next: NextFunction){
  winston.error(err.message, err);

  // error
  // warn
  // info
  // verbose
  // debug 
  // silly

  res.status(500).send('Something failed.');
}