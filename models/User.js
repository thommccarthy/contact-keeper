const mongoose = require('mongoose');

// create model (constructor compiled from schema). for creating and reading.
const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

// .model function takes in the name that you want to name the model and the schema
module.exports = mongoose.model('user', UserSchema);
