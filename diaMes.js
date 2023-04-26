function calcularDiasFaltantes(){
    var dia = parseInt(prompt("Digite uma data"))
    var mes = parseInt(prompt("Digite uma data"))

    var mes28 = 2;
    
    if (mes == mes28){
        faltante = 28 - dia;      
    } else {
        faltante = 31 - dia
    }

    console.log("Faltam", faltante, "no", mes)
}

calcularDiasFaltantes();