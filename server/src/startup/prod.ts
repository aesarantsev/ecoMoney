import helmet from 'helmet'
import compression from 'compression'
import { Application } from "express";

export default function (app: Application) {
  if (process.env.NODE_ENV === "production") {
    app.use(helmet());
    app.use(compression());
  }
};
