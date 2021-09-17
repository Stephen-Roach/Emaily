const express = require('express');
require('./services/passport');

const app = express();

require('./routes/authRoutes')(app); //invokes the function in authRoutes.js and passes app as a parameter

// if PORT is not defined, we will use 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT);
