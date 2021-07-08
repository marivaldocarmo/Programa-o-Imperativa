function media(){
    var nota1 = parseFloat(document.getElementById("nota1").value);
    var nota2 = parseFloat(document.getElementById("nota2").value);

    var media = (nota1 + nota2)/2 ;

    if(media >= 7)
     if(media==10)
      alert("Uau! Aprovado com distinto"+media);
     else
      alert("Parabens, aprovado! Media "+media);
    else
     alert("Reprovado!")

   }
Código:function sonotaboa(nota) {
if (nota >= 7) {
console.log('Aprovado Pra burro!')
} else {
console.log('Reprovado')
}
if (nota >= 10) {
console.log('Aprovado Com sucesso feioso')
}


}
sonotaboa(8.1)
sonotaboa(4.1)
sonotaboa(2.1)
sonotaboa(10)