require('dotenv').config()
module.exports = {
  dbURL: process.env.mongoURL,
  dbName: process.env.dbName
}
console.log('process.env.mongoURL', process.env.mongoURL)
console.log('process.env.dbName', process.env.dbName)