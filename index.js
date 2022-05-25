var express = require("express");
var app = express();
var{autor} = require("./models");
var{livro} = require("./models");

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}))

app.get("/", async function(req, res){
  var mostrar = await autor.findAll();
  res.json(mostrar)
})

//Autores

app.get("/autores", async function(req, res){
  var mostrar = await autor.findAll();
  res.json(mostrar)
})
app.get("/autores/:id", async function(req, res){
  var mostrar = await autor.findByPk(req.params.id);
  res.json(mostrar)
})
app.get("/autores/:id/livros", async function(req, res){
  var mostrar = await autor.findByPk(req.params.id, {include:'livros'});
  res.json(mostrar.livros)
})

app.post("/autores", async function(req, res){
  var adicionar = await autor.create(req.body);
  res.json(adicionar)
})

app.put("/autores/:id", async function(req, res){
  var atualizar  = await autor.update(req.body, {where: {id: req.params.id}});
  res.json(atualizar)
})

app.delete("/autores/:id", async function(req, res){
  var apagar = await autor.destroy({where: {id: req.params.id}});
  res.json(apagar)
})

//Livros

app.get("/livros", async function(req, res){
  var mostrarlivro = await livro.findAll();
  res.json(mostrarlivro)
})

app.get("/livros/:id", async function(req, res){
  var mostrar = await livro.findByPk(req.params.id)
  res.json(mostrar)
})

app.get("/livros/:id/autor", async function(req, res){
  var mostrar = await livro.findByPk(req.params.id, {include : 'autor'});
    res.json(mostrar.autor);
})

app.post("/livros", async function(req,res) {
  var adicionar = await livro.create(req.body);
  res.json(adicionar)
})

app.put("/livros/:id", async function(req, res) {
  var atualizar = await livro.update(req.body, {where: {id: req.params.id} });
  res.json(atualizar)
})

app.delete("/livros/:id", async function(req, res){
  var apagar = livro.destroy({where: {id:req.params.id}});
  res.json(apagar)
})

app.listen(3004, function(){
  console.log("Funcionando!")
})