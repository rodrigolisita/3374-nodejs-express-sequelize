const app = require('./src/app.js');
require('dotenv').config();
const PORT = 3000;


//const mysql = require('mysql2')
//const connection = mysql.createConnection({
//  host: process.env.HOST,
//  user: process.env.USER,
//  password: process.env.PASSWORD,
//  database: process.env.DATABASE
//});
//connection.connect(err) =>{
//  if(err){
//    throw err;
//  }
//  console.log("Connected to database");
//}


app.listen(PORT, ()=>{
  console.log('servidor escutando!');
});