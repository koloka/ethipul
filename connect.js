const mysql = require('mysql');

const dbc = mysql.createConnection({
  host: 'localhost',
  user: 'nativeuser',
  password: '896pass',
  database: 'ethipulbook'
});

dbc.connect((err)=>{
  if(err){
    throw err;
  }
  console.log('Mysql connectededddd');
});

module.exports = dbc;
