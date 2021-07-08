// objetos literais 
let restaurante = { nomeRestaurante :"Uai que fome.",

 Cardapio : "salada"
};
function entrada() { 
    return "Seja Bem Vindo"
}

console.log(entrada(), restaurante.nomeRestaurante )
console.log("Segue nosso cardápio:",restaurante.Cardapio)

// spread operator

let numerosPrimos = [2,5,7,9,11,13]
let numeros = [1,6,8,12,...numerosPrimos]
console.log(numeros)

function maiorNumero(...paramns){
    return numeros
     Match.min()
}
