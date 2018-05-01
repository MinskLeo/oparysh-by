const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.static("assets"));


app.get('/', (req, res) => {
  res.render("index");
});

app.get('/company', (req, res) => {
  res.render("index");
});

app.get('/cooperation', (req, res) => {
  res.render("index");
});


app.listen(8080,()=>{
  console.log("oparysh.by has been started on: 8080");
});