var numero = window.prompt("Informe o numero do funcionario ");
var valorHora = window.prompt("Informe o valor da hora de trabalho do funcionario ");
var horas = window.prompt("Informe o numero de horas trabalhadas ");
var filhos = window.prompt("Informe o numero de filhos menores que 14 anos ");

valorHora = parseFloat(valorHora);
horas = parseInt(horas);
filhos = parseInt(filhos);

var dezPorCento = salario * 0.1;

var salario = valorHora * horas + filhos * dezPorCento;

alert("O salario do funcionario sera " + salario);