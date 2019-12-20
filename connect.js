const mysql = require('mysql');
const config = require('config');
const dbc = mysql.createConnection({
  host: 'localhost',
  user: config.get('userdb'),
  password: config.get('passworddb'),
  database: config.get('databasedb')
});


dbc.connect((err)=>{
  if(err){
    throw err;
  }
  console.log('Mysql connectededddd');
});

module.exports = dbc;
