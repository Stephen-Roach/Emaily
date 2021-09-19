const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users'); // fetching the users from the mongoose collection

passport.serializeUser((user, done) => {
  done(null, user.id);
});

// creates a new instance of the google strategy which takes in the authentication keys as well as a callback URL
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ googleId: profile.id }).then((existingUser) => {
        if (existingUser) {
          // we already have a record with the given profile ID
          done(null, existingUser);
        } else {
          // we do not have a user record with the given ID, make a new one
          new User({ googleId: profile.id }) // creates a new instance of a user and saves it to the DB
            .save()
            .then((user) => done(null, user));
        }
      });
    }
  )
);
