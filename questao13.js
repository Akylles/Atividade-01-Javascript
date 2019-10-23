var celsius = window.prompt("Informe a temperatura em graus celsius");
celsius = parseFloat(celsius);

var fahrenheit = (1.8 * celsius) + 32;

if(fahrenheit < 10){
    alert("Muito frio");
}else if(fahrenheit < 15){
    alert("Frio");
}else if(fahrenheit < 22){
    alert("Normal");
}else if(fahrenheit < 30){
    alert("Quente");
}