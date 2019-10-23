var salario = window.prompt("Digite o salario ");
salario = parseFloat(salario)

if(salario < 280){
    salario = salario * 1.2;
}else if(salario < 700){
    salario = salario * 1.15;
}else if(salario < 1500){
    salario = salario * 1.1;
}else{
    salario = salario * 1.05;
}

alert("Novo Salario = " + salario);