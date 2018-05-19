const express = require('express');
const app = express();
const bodyParser = require('body-parser');


var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: "oparysh"
});
connection.connect();


const CategoriesDatabaseSelection = async () => {
  let resultData = null;
  await Category.find({}, (err, result) => {
    if (!err) {
      resultData = result;
    }
  });
  return await resultData;
}


connection.query('SELECT * FROM categories', function (error, results, fields) {

});

connection.end();




app.listen(8080,()=>{
  console.log("Server has been started on: 8080");
});