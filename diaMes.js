function calcularDiasFaltantes(){
    var dia = parseInt(prompt("Digite uma data"))
    var mes = parseInt(prompt("Digite uma data"))

    var mes28 = 2;
    var meses30 = [4, 6, 9, 11]
    
    meses30.forEach(function(mes30){
        return mes30;
    })

    if (mes == mes28){
        faltante = 28 - dia;      
    } else {
        faltante = 31 - dia
    }

    console.log("Faltam", faltante, "no", mes)
}

calcularDiasFaltantes();