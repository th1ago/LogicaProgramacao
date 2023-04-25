function calcularIMC(){
    var peso = prompt("Qual o seu peso");
    var altura = prompt("Qual o sua altura");
    
    imc = peso / (altura * altura);
    console.log("Seu imc " + imc);   
}

calcularIMC();