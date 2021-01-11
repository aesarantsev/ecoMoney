import { Request, Response, NextFunction } from 'express'

export default function(req: Request, res: Response, next: NextFunction) {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.send("Not allowed");
  }
};
