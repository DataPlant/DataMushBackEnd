const path = require('path')
const mongoose = require('mongoose');

const connectionString = 4000

mongoose.connect(connectionString, configOptions)
  .then(() => console.log(`MongoDB successfully connected...${mongoose.connection.host}:${mongoose.connection.port}`))
  .catch((err) => console.log(`MongoDB connection error: ${err}`));

module.exports = {
    Mushroom: require('./Mushroom'),
    existingMushroom: require('./existingMushroom')
}