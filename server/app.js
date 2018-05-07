// Importing modules
const express = require("express");
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Setting up some of them
mongoose.connect('mongodb://localhost/oparysh');
app.set("view engine", "ejs");
app.use(bodyParser.json());
app.use(express.static("assets"));

// Creating variables
const Product = mongoose.model('Product', {
  name: String,
  image: String,
  description: String,
  price: Number,
  category: String
 });

const Category = mongoose.model('Category', {
  name: String,
  link: String
});

let categories = [];


// SETUP ENDED

app.get('*', (req, res, next) => {
  console.log("Клиент: "+req.url);
  next();
});


app.get('/', (req, res) => {
  res.render("index", { categories: categories });
});

app.get('/company', (req, res) => {
  res.render("index", { categories: categories });
});

app.get('/cooperation', (req, res) => {
  res.render("index", { categories: categories });
});

app.get('/catalog', (req, res) => {
  res.render("catalog", { categories: categories });
});

app.get('/admin', (req, res) => {
  res.render('admin');
});

app.get('/catalog/\*\/', (req, res) => {
  let path = req.url;
  let splitted = path.split('/');

  // категория - [2]
  // товар - [3]



  // Открытая категория
  if(splitted.length==3){

      Product.find( { category: splitted[2] }, (err,result)=>{
        if(err || result.length==0){
          let error = {
            code: 204,
            message: "Контент не найден"
          }
          res.render('error', { error: error, categories: categories } );
        }else{
          res.render('catalog', { items: result, categories: categories } );
        }
      });

  }else if(splitted.length==4){
  // Открытая категория + товар (открыта страница товара)
    Product.find( { category: splitted[2], _id: splitted[3] } ,(err,result)=>{
        if (err || result.length == 0) {
          let error = {
            code: 204,
            message: "Контент не найден"
          }
          res.render('error', { error: error, categories: categories } );
        }else{
          res.render('catalog', { items: result, categories: categories } );
        }

      });

  }else{
    let error = {
      code: 500,
      message: "Внутренняя ошибка сервера"
    }
    res.render('error', { error: error, categories: categories } );
  }

});


app.post('/admin/login', (req, res) => {
  // console.log(req.body);
  res.send("OK");
});

app.get('/admin/getcategories', (req, res) => {
  let categories = null;
  Category.find({}, (err, result) => {
    if (err) {
      console.log("Error! : " + err.message);
    } else {
      categories = result;
    }
  console.log(categories);
  res.send(categories);

  });
});


app.post('/admin/getcatalog', (req, res) => {
  let category = req.body.category;
  let products = null;

  if(category)
    Product.find({
      category: category
    },(err,result)=>{
      if (err) {
        console.log("Error! : " + err.message);
      } else {
        products = result;
      }

      res.send(products);
    });
});


app.listen(8080,()=>{
  Category.find( {}, (err,result) => {
    if(err){
      console.log("Error! : "+err.message);
    }else{
      categories = result;
    }


});



  console.log("oparysh.by has been started on: 8080");
});
