const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const dbName = 'lmsData';
async function dbConnection() {
    // Use connect method to connect to the server
    await client.connect();
    const db = client.db(dbName);
    return db;
  }

  module.exports = dbConnection;