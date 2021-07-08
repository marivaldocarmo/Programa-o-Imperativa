let alunos=['Maria', 'João', 'Tiago'];

//console.log(alunos.join('/'));
// = Maria/João/Tiago

//vamos procurar o Tiago
console.log(alunos.indexOf('Tiago'));
//= 2

console.log(alunos.lastIndexOf('João'));
//= 1

//podemos usar um controle de decisão
if(alunos.lastIndexOf('João')!=-1)
{
    console.log('Encontrado');
}
else
{
    console.log("Não encontrado");
}
//= 2
//= 1
//= Encontrado      1:40
