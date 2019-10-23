var nota1;
var nota2;
var nota3;
var nota4;

nota1 = window.prompt("Digite a primeira nota ");
nota2 = window.prompt("Digite a segunda nota ");
nota3 = window.prompt("Digite a terceira nota");
nota4 = window.prompt("Digite a quarta nota");

nota1 = parseFloat(nota1);
nota2 = parseFloat(nota2);
nota3 = parseFloat(nota3);
nota4 = parseFloat(nota4);

var media = (nota1 + nota2 + nota3 + nota4) / 4;

if(media >= 7){
    alert("Aluno Aprovado por media. Media = " + media);
}else if(media < 7 && media >= 4){
    var nota5 = window.prompt("Digite a nota da prova final");
    nota5 = parseFloat(nota5);
    media = (media + nota5) / 2;

    if(media >= 5){
        alert("Aluno Aprovado na prova final com media = " + media);
    }else{
        alert("Aluno Reprovado na prova final com media = " + media);
    }

}else{
    alert("Media = " + media + ". Aluno Reprovado por media. Media = " + media);
}