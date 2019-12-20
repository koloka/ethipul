const mysql = require('mysql');

const dbc = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'testdb'
});

dbc.connect((err)=>{
  if(err){
    throw err;
  }
  console.log('Mysql connectededddd');
});

module.exports = dbc;
