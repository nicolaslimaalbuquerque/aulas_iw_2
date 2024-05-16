//solicitar um modulo interno do node chamado http
var http = require('http')

//abrindo um servidor http
http.createServer(function(req,res){
    res.end("OII ETEC MCM SEUS LINDOS")
}).listen(8081)

console.log('servidor rodando...')