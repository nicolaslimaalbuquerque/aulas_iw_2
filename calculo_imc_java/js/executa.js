function calcular(){
    var altura=document.getElementById("altura").value / 100;
    var peso=document.getElementById("peso").value;

    var imc = peso / altura **2;
    var texto=""
   
    if (imc<18.5){
         texto="magreza"
    }
    else if(imc<24.9){
         texto="Ideal"
    }
    else if(imc<29.9){
         texto="sobrepeso" 
    }
    else if(imc<34.9){
         texto="obesidade grau I" 
    }
    else if(imc<39.9){
         texto="obesidade grau II"
    }
    else if(imc>40){
     texto="obesidade grau III"
}


document.getElementById("texto").innerHTML=texto
}
