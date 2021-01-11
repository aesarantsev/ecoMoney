import winston from "winston";
import passport from "passport";
import mongoose from "mongoose";
import session from "express-session";
import MongoStore from "connect-mongo";
import bodyParser from "body-parser";
import express, { Application } from "express";
import chalk from 'chalk';

import passportSetup from "./startup/passport/passport-setup";
import logging from "./startup/logging";
import validation from "./startup/validation";
import cors from "./startup/cors";
import db from "./startup/db";
import prod from "./startup/prod";
import routes from "./routes";

const port: string = process.env.PORT || "3900";
const app: Application = express();
const mongoStoreWithSession = MongoStore(session);

passportSetup();
logging();
validation();
cors(app);
db();
prod(app);

// Create session
app.use(
  session({
    // Used to compute a hash
    secret: String(process.env.SESSION_KEY),
    resave: false,
    saveUninitialized: false,
    // Store session on DB
    store: new mongoStoreWithSession({ mongooseConnection: mongoose.connection }),
  })
);

// Parse incoming request bodies in a middleware before your handlers, available under the req.body property.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(passport.initialize());
app.use(passport.session());

routes(app);

app.listen(port, () => {
  const successMessage = `✔ Server is running on PORT ${port}`;
  winston.info(successMessage);
  console.log(chalk.bgBlue(successMessage))
});


// import express from "express";
// import chalk from "chalk";
// import dotenv from 'dotenv';
// dotenv.config();

// import { connectDB } from './heplers/db';
// import { logError } from './heplers';
// // import User from './models/User';

// const app = express();

// app.get("/", (req, res) => {
//     res.send("Hello World")
// })

// const PORT = process.env.PORT || 3000;

// const startServer = () => {
//     console.log(chalk.bgGreen("✔ Database is connected"));

//     // const user = new User({name:'test', email:"test@test.ru", password:"11111111"})
//     // user.save();

//     app.listen(PORT, () => {
//         console.log(chalk.bgBlue(`✔ Server is running on PORT ${PORT}`))
//     })
// }

// connectDB()
//   .on("error", logError)
//   .on("disconnected", logError)
//   .once("open", startServer);
