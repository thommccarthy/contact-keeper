const mongoose = require('mongoose');
// config is imported from default.json
const config = require('config');
// brings in mongo URI, which was copied from mongo atlas
const db = config.get('mongoURI');

// function to connect to database
const connectDB = async () => {
  try {
    // use mongoose to connect to db URI
    await mongoose.connect(db);
    console.log('MongoDB connected');
  } catch (err) {
    console.error(err.message);
    //   exit with failure
    process.exit(1);
  }
};

// remember to export function
module.exports = connectDB;
