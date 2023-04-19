// Nucleo da fera Demoniaco Bellmoth
// Vanya
// Dalmary
// Cidadela de Tala

function mediaIdadeFor() {
    var numeroFamiliar = prompt("Quantos familiares");
    var inteiro = 1;
    var somaIdade = 0;
    
    for(inteiro; inteiro <= numeroFamiliar; inteiro++){
        var idade = parseInt(prompt("Qual a idade"));
        somaIdade = somaIdade + idade;

        // o param media dentro do for - faz com ele calcule a media 
        // a cada idade inserida e somando a ultima e dividindo
    }
    
    var media = somaIdade / numeroFamiliar;
    console.log(media);
}


function mediaIdadeWhile(){
    var numeroFamiliar = prompt("Quantos familiares");
    var inteiro = 1;
    var somAIdade = 0;

    while(inteiro<=numeroFamiliar){
        var idade = parseInt(prompt("Qual a sua idade"));
        somAIdade = somAIdade + idade;
        inteiro++;
    }

    var media = somAIdade /numeroFamiliar;
    console.log(media);
}

mediaIdadeWhile();