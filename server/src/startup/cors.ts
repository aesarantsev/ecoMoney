import cors from 'cors'
import { Application } from "express";

export default function (app: Application) {
  app.use(
    cors({
      origin: [
        `https://${process.env.HOST}`,
        `http://${process.env.HOST}`,
        `${process.env.HOST}`
      ],
      methods: ["GET", "POST", "PUT"],
      credentials: true // enable set cookie
    })
  );
};
