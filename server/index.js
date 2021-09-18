const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./services/passport');
require('./models/User');

mongoose.connect(keys.mongoURI);

const app = express();

require('./routes/authRoutes')(app); //invokes the function in authRoutes.js and passes app as a parameter

// if PORT is not defined, we will use 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT);
