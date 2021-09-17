const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');
const app = express();

//creates a new instance of the google strategy which takes in the authentication keys as well as a callback URL
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
    },
    (accessToken) => {
      console.log(accessToken); //access token given to us once we are authorized
    }
  )
);

app.get('/', (req, res) => {
  res.send({ hi: 'there!' });
});

// if PORT is not defined, we will use 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT);
