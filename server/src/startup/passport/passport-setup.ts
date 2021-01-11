import passport from 'passport'
import User from "../../models/user";
import Strategy from 'passport-local'; 
import { IUser } from '../../models/user'

const LocalStrategy = Strategy.Strategy;

export default function () {
  passport.use(
    new LocalStrategy((username: string, password: string, done: any) => {
      User.findOne({ username }, (err: any, user: any) => {
        if (err) {
          return done(err);
        }
        if (!user) {
          return done(null, false, { message: "Username doesn't exist" });
        }
        if (!user.validPassword(password)) {
          return done(null, false, { message: "Incorrect Name or password" });
        }
        return done(null, user);
      });
    })
  );
  passport.serializeUser((user: any, done) => done(null, user.id));
  passport.deserializeUser((id, done) =>
    {
      User.findById(id).then((user: any) => done(null, user))}
  );
};
