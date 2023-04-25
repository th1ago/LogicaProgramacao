function calcularIMC(){
    var peso = prompt("Qual o seu peso");
    var altura = parseInt("Qual o sua altura");
    
    calculadora = peso / (altura * altura);
    console.log(calculadora);   
}

calcularIMC();