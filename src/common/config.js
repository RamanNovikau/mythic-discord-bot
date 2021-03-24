const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  MONGO_DB_CONNECTION_STRING: process.env.MONGO_DB_CONNECTION_STRING,
  DISCORD_BOT_TOKEN: process.env.BOT_TOKEN,
};
