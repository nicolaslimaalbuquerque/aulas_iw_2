const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const Sequelize = require('sequelize')

//configuração
    //Template Engine
    app.engine('handlebars', handlebars.engine({defaultLayout:'main'}))
    app.set('view engine', 'handlebars')

//Conexão com o  Banco de Dados
const sequelize = new Sequelize('test','root','',{
    host:'localhost',
    dialect:'mysql'
})

//Rotas
app.get('/cadastro',function(req,res){
    // res.send('ROTA DE CADASTRO DE POSTS')
    res.render('formulario')
})

app.post('/add',function(req,res){
    res.send('Formulario recebido')
})

app.listen(8081,function(){
    console.log('Servidor rodando na url http://localhost:8081')
}) //criou servidor e está escutando a porta