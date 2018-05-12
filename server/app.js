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
  link: String,
  description: String
});

let categories = [];

// Выборка категорий. Использование:
// CategoriesDatabaseSelection().then( (value)=>{} );
const CategoriesDatabaseSelection = async () => {
  let resultData = null;
  await Category.find({},(err,result) => {
    if(!err){
      resultData = result;
    }
  });
  return await resultData;
}

// SETUP ENDED

app.get('*', (req, res, next) => {
  console.log("Клиент: "+req.url);
  next();
});


app.get('/',  (req, res) => {
  CategoriesDatabaseSelection().then( (value)=>{
    res.render("index", { categories: value });
  });

  
});

app.get('/company', (req, res) => {
   CategoriesDatabaseSelection().then( (value)=>{
    res.render("index", { categories: value });
  });
  
});

app.get('/cooperation', (req, res) => {
  CategoriesDatabaseSelection().then( (value)=>{
    res.render("cooperation", { categories: value });
  });
  
});

app.get('/catalog', (req, res) => {
  CategoriesDatabaseSelection().then((value) => {
    res.render("catalog", { categories: value });
  });
  
});

app.get('/contacts', (req, res) => {
  CategoriesDatabaseSelection().then((value) => {
    res.render("contacts", { categories: value });
  });
});

app.get('/buy', (req, res) => {
  CategoriesDatabaseSelection().then((value) => {
    res.render("wheretobuy", { categories: value });
  });
});

app.get('/admin', (req, res) => {
  res.render('admin');
});

app.get('/catalog/\*\/', (req, res) => {
  let path = req.url;
  let splitted = path.split('/');
  let categoryInfo = {
    name: null,
    description: null
  };

  // категория - [2]
  // товар - [3]



  // Открытая категория
  if(splitted.length==3){
      Category.find({ link: splitted[2] },(error,category)=>{
        console.log(category);
        console.log("1. cat");
        if(!error){
          categoryInfo.name = category[0].name;
          categoryInfo.description = category[0].description;
          console.log("2. if");
        }

        Product.find({ category: splitted[2] }, (err, result) => {
          console.log("3. product");
          if (err || result.length == 0) {
            let error = {
              code: 204,
              message: "Контент не найден"
            }
            CategoriesDatabaseSelection().then((value) => {
              res.render('error', { error: error, categories: value });
            });
          } else {
            CategoriesDatabaseSelection().then((value) => {
              console.log("4. render");
              res.render('catalog', { items: result, categories: value, categoryInfo: categoryInfo });
            });
          }
        });


      });

      

  }else if(splitted.length==4){
  // Открытая категория + товар (открыта страница товара)
    Product.find( { category: splitted[2], _id: splitted[3] } ,(err,result)=>{
        if (err || result.length == 0) {
          let error = {
            code: 204,
            message: "Контент не найден"
          }
          CategoriesDatabaseSelection().then((value) => {
            res.render('error', { error: error, categories: value } );
          });
        }else{
          CategoriesDatabaseSelection().then((value) => {
            console.log(result);
            res.render('productview', { product: result[0], categories: value } );
          });
        }

      });

  }else{
    let error = {
      code: 500,
      message: "Внутренняя ошибка сервера"
    }
    CategoriesDatabaseSelection().then((value) => {
      res.render('error', { error: error, categories: value } );
    });
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

app.post('/admin/delcategory', (req, res) => {
  let resultObj = {
    success: false
  };

  console.log("Delete route!");
  if(req.body.id){
    Category.find({ _id: req.body.id }).remove().exec( (err_delete) => {
      if (!err_delete){
        Category.find({},(err_find,result_find)=>{
          if(!err_find){
            resultObj = {
              success: true,
              categories: result_find
            }
            res.send(resultObj);
          }else{
            res.send(resultObj);
          }
        });
      }else{
        res.send(resultObj);
      }
    });
  }
});

app.post('/admin/setcategory', (req, res) => {
  let requestData = req.body;
  let resultObj = null;

  if(requestData){

    Category.findById(requestData.id, (err1,category)=>{
      if(!err1){
        category.set({
          name: requestData.name,
          link: requestData.link,
          description: requestData.description
        });


        category.save((err2) => {
          if (err2) {

            console.log("Error with updating!");
            resultObj = {
              success: false
            }
            res.send(resultObj);

          } else {
            Category.find({}, (err3, result) => {


              if (!err3) {
                resultObj = {
                  success: true,
                  categories: result
                }
              }else{
                resultObj = {
                  success: false
                }
              }

              res.send(resultObj);

            });

          }
        });

      }else{
        console.log("Error! (updating)");
        resultObj = {
          success: false
        }
        res.send(resultObj);
      }
      
    });

  }
});

app.post('/admin/newcategory', (req, res) => {
  console.log("New Cat!");
  let requestData = req.body;
  let resultObj = {
    success: false
  };

  console.log(requestData);

  if(requestData){
    const newCategory = new Category(requestData);
    newCategory.save( (err1, product)=>{

      if(!err1){
        Category.find({},(err2,result) => {


          if(!err2){
            resultObj = {
              success: true,
              categories: result
            }
            res.send(resultObj);
          }

          
        });
      }

    });
  }else{
    res.send(resultObj);

  }
  
});


app.listen(8080,()=>{
  console.log("oparysh.by has been started on: 8080");
});
