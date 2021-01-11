import winston from 'winston'
import mongoose from 'mongoose'
import chalk from 'chalk';

// Connect to DB from env variable url, create instance
export default function () {
  const db = process.env.MONGO_URI || "mongodb://localhost:27017/test";
  const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  };
  mongoose.connect(db, options).then(() => {
    const successMessage = `Connected to ${db}...`;
    console.log(chalk.bgBlue(successMessage))
    winston.info(successMessage)
  });
};
