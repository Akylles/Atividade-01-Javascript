var frase = window.prompt("Informe a frase");
var palavra = window.prompt("Informe a palavra a ser pesquisada");

var arrayPalavras = frase.split(" ");
var numOcorrencias = 0;

for(var i = 0; i < arrayPalavras.length; i++){
    if(arrayPalavras[i].includes(palavra)){
        numOcorrencias++;
    }
}

alert("A palavra apareceu " + numOcorrencias + " vezes " )