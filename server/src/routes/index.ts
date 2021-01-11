import { Application } from "express";
import user from "./user";
import auth from "./auth";
import error from "../middleware/error";

export default function (app: Application) {
  app.use("/api/user", user);
  app.use("/api/auth", auth);
  app.use(error); 
};
