const ligar = document.getElementById('ligar')
const desligar = document.getElementById('desligar')
const lampada = document.getElementById('lamp')
const neutro = document.getElementById('neutro')
const texto = document.getElementById('texto')

// function (){
//          if(!estaQuebrada()){
//         lampada.src = "img/ligada.jpg"
//         }
//         else{
//         lampada.src = "img/desligada.jpg"    
//         }
// }

function volta (){
    return lampada.src.indexOf('desligada') > -1}

function lampNeutro (){
    if(!estaQuebrada()){
        if(volta()){
        lampada.src = 'img/ligada.jpg'
        texto.innerHTML = "LIGADA"
      }
        else{
        lampada.src = 'img/desligada.jpg'
        texto.innerHTML = "DESLIGADA"
      }
    }
}
function estaQuebrada(){
     return lampada.src.indexOf('quebrada') > -1
     
}
 
function lampLigada(){
        if(!estaQuebrada()){
        lampada.src = "img/ligada.jpg"
        texto.innerHTML = "LIGADA"
        }
}

function lampDesligada(){
    if(!estaQuebrada()){
     lampada.src = "img/desligada.jpg" 
     texto.innerHTML = "DESLIGADA" 
    }
    
}
function lampQuebrada(){
    lampada.src = "img/quebrada.jpg"
    texto.innerHTML = "QUEBRADA"
}

// função para trocar a imagem quando apertar o 'click'
ligar.addEventListener('click',lampLigada)
desligar.addEventListener('click',lampDesligada)
neutro.addEventListener('click',lampNeutro)


// função para ação 
lampada.addEventListener('mouseover',lampLigada)
lampada.addEventListener('mouseleave',lampDesligada)
lampada.addEventListener('dblclick', lampQuebrada)
// lampada.addEventListener('mouseleave',lampNeutro)
