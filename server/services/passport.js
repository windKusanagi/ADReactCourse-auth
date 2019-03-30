import passport from "passport";
import User from "../models/user";
import { secret } from "../config/config";
var JwtStrategy = require("passport-jwt").Strategy,
	ExtractJwt = require("passport-jwt").ExtractJwt;
import LocalStrategy from "passport-local";

// setup options for JWT Strategy
const jwtOptions = {
	jwtFromRequest: ExtractJwt.fromHeader("authorization"),
	secretOrKey: secret
};

const localOptions = { usernameField: "email" };
const localLogin = new LocalStrategy(localOptions, (email, password, done) => {
	// Verify email and password
	User.findOne({ email: email }, (err, user) => {
		if (err) {
			return done(err);
		}
		if (!user) {
			return done(null, false);
        }
        
        user.comparePassword(password, (err, isMatch) => {
            if(err) return done(err)
            if (!isMatch) return done(null, false)
            return done(null, user)
        } )
    });
});

// Create JWT strategy
const jwtLogin = new JwtStrategy(jwtOptions, (payload, done) => {
	// See if the user ID in the payload exists in our database
	User.findById(payload.sub, (err, user) => {
		if (err) {
			return done(err, false);
		}
		if (user) {
			done(null, user);
		} else {
			done(null, false);
		}
	});
});

// Tell passport to use this strategy
passport.use(jwtLogin);
passport.use(localLogin);
