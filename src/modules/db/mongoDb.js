const mongoose = require('mongoose');
const config = require('../../common/config');

const url = config.MONGO_DB_CONNECTION_STRING;
const dbConnection = () => {
  mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    })
    .catch((err) => console.log(err.message));

  const db = mongoose.connection;
  db.once('open', () => {
    console.log('Mongo connection successfully!');
  });
};

module.exports = { dbConnection };
