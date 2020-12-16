const mongoose = require('mongoose');

const db = {
  host: process.env.MONGO_HOST || 'localhost',
  port: process.env.MONGO_PORT || 27017
};

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000 // Keep trying to send operations for 5 seconds
};

const init = async () => {
  /* MONGOOSE SETUP */
  const connectionString = `mongodb://${db.host}:${db.port}/blog_everyone`;

  try {
    await mongoose.connect(connectionString, options);
  } catch (e) {
    console.log(`Error connecting to mongo ${connectionString}, ${e.message}`);
  }
};

module.exports = {
  init
};
