
var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var tamanho = numeros.length;

var somaDePrimos = 0;

for(var i = 1; i <= tamanho; i++){
    var divisores = 0;
    var num = numeros[i - 1];

    for(var j = 1; j <= num; j++){
        if(num % j == 0){
            divisores++;
        }
    }
    if(divisores == 2){
        somaDePrimos += num;
    }
    
}

console.log("A soma dos primos eh " + somaDePrimos);