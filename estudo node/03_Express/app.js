const express = require('express')
const app = express()


app.get('/', function(req, res){
    res.send("vcin")
})

app.get('/blog', function(req, res){
    res.send("Blog do vcin")
})

app.get('/sobre', function(req, res){
    res.send("Conheça Vcin")
})

app.get('/cadastro/:nome/:idade', function(req, res){
    res.send("Seu nome é: " + req.params.nome + "\nSua idade é: " + req.params.idade)
    // res.send(req.params)
})

app.listen(8081, function(){
    console.log('Servidor rodando em http://localhost:8081')
}) //criou servidor e está escutando a porta

