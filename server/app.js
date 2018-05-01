// Importing modules
const express = require("express");
const app = express();
const mongoose = require('mongoose');

// Setting up some of them
mongoose.connect('mongodb://localhost/oparysh');
app.set("view engine", "ejs");
app.use(express.static("assets"));

// Creating variables
const Product = mongoose.model('Product', { 
  name: String,
  image: String,
  description: String
 });
const Category = mongoose.model('Category', {
  name: String
});

let categories = [];


// SETUP ENDED

app.get('*', (req, res, next) => {
  console.log(categories);
  next();
});


app.get('/', (req, res) => {
  // нужно добавить категории
  res.render("index", { categories: categories });
});

app.get('/company', (req, res) => {
  res.render("index", { categories: categories });
});

app.get('/cooperation', (req, res) => {
  res.render("index", { categories: categories });
});


app.listen(8080,()=>{
  Category.find( (err,result) => {
    if(err){
      console.log("Error! : "+err.message);
    }else{
      result.forEach( item => {
        categories.push(item.name);
      });
    }


  })
  

  console.log("oparysh.by has been started on: 8080");
});