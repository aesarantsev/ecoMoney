import { Application } from "express";

import user from "./user";
import auth from "./auth";
import category from './category'

import error from "../middleware/error";

export default function (app: Application) {
  app.use("/api/user", user);
  app.use("/api/auth", auth);
  app.use("/api/category", category)
  app.use(error); 
};
