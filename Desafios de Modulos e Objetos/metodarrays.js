let par=[2,4,6,8,10]

let impares= par.map(function (num){
    return num/2 != 0;
})

console.log(impares);

let nomes=[1,2,3,1]

let procura = nomes.filter(function(Maria){
    return maria = 1;
})

console.log(maria)

let numeros =[ 1,5,7,9,11]

let escrita = numeros.reduce(
    function(acumulador,num){
        return acumulador + num;
    }
)
console.log(escrita)

let animais= ['elefante','vaca','cavalo']

let ler= animais.forEach(
    function (animal)
    console.log("animal")
){

}