const pessoas = [
    {nome: 'Maria', salario: 2000.00},
    {nome: 'João', salario: 4900.00},
    {nome: 'José', salario: 1000.00},
    {nome: 'Paula', salario: 1500.00}
];

//arrow
//const soNome=hen=>hen.nome.toUpperCase();
//console.log(pessoas.map(soNome));
//console.log(pessoas);
const soSalario=hen=>hen.salario;
console.log(pessoas.map(soSalario));

//const salmaior2000=pessoas.filter(maior=>maior.salario>=2000);
//console.log(salMaior2000);