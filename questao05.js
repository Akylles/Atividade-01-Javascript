var x = window.prompt("Digite o primeiro numero ");
var y = window.prompt("Digite o segundo numero ");
var z = window.prompt("Digite o codigo de selecao ");

x = parseFloat(x);
y = parseFloat(y);

switch(z){
    case '1':
        alert("A soma de " + x + " e " + y + " eh " + (x + y));
        break;
    case '2':
        alert("A multiplicacao de " + x + " e " + y + " eh " + (x * y));
        break;
    case '3':
        alert("A divisao de " + x + " e " + y + " eh " + (x / y));
        break;
}