//Crie um módulo que exporte uma função (em um arquivo separado). Após isso, importe o módulo no arquivo principal e execute a função importada.

var total = require("./soma")

console.log(total(2,4))

var subtracao = require("./sub")

console.log(subtracao(4,2))