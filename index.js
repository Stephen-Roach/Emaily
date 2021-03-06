const express = require('express');
const mongoose = require('mongoose');
const cookieSessions = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();

// middleware
app.use(
  cookieSessions({
    maxAge: 30 * 24 * 60 * 60 * 1000, // this saves the cookie for 30 days
    keys: [keys.cookieKey],
  })
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app); //invokes the function in authRoutes.js and passes app as a parameter

// if PORT is not defined, we will use 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT);
