require('dotenv').config();

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
let isConnected;
module.exports = connectToDatabase = (dbName) => {
 if (isConnected) {
   console.log('=> using existing database connection');
   return Promise.resolve();
 }
 console.log('=> using new database connection');
 return mongoose.connect(process.env.DB, { useNewUrlParser: true, dbName: dbName })
   .then(db => {
     isConnected = db.connections[0].readyState;
   });
};