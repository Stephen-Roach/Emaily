const mongoose = require('mongoose');
const { Schema } = mongoose;

// a Schema object describes what every individual record will look like
const userSchema = new Schema({
  googleId: String,
});

//a model class in mongoose creates a collection on MondoDB
mongoose.model('users', userSchema);
