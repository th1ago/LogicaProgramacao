function TabuadaWhile(){
    var multiplicado = 1;
    while(multiplicado <= 10){
        console.log("tabuada do 7 " + 7 * multiplicado);
        multiplicado++;
    }
}

function TabuadaFor(){
    var numeroTexto = prompt("Qual a tabuada");
    var numeroTabuada = parseInt(numeroTexto);

    for(mult = 1; mult <=10; mult++){
        console.log("tabuada do 5" + mult);
    }
}

TabuadaFor();