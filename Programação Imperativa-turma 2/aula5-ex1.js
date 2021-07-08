let pratosDeComida=['Azul, Vermelho'];
pratosDeComida.push('felijão');
console.log(pratosDeComida);
//o push inseri elemento
pratosDeComida.push('Bife a cebolado');
console.log(pratosDeComida);
//shift seleciona as ultimas palavras
let nomes=['Ana', 'Beatriz', 'Silvia'];
let primeiroNome=nomes.shift();
console.log(nomes);
console.log(primeiroNome);
//unshift insere no começo da paralvra
let marcas=['Audi'];
marcas.unshift('fiat');
console.log(marcas);
marcas.unshift('ferrary', 'BMW');
console.log(marcas);

let dias=['segunda', 'Terça', 'Quarta'];
let separadosPorVirgulas=dias.join();
console.log(separadosPorVirgulas);

//Encontrou o q buscava, devolva 2, não encontrou devolve -1
let frutas=['Maçã', 'Pera', 'Uva'];
frutas.indexOf('Uva');
frutas.indexOf('Bnana');
console.log(frutas);

//essa propiedade retorna caracteres da string
let mySerie='Mad Men';
mySerie.length;
console.log(mySerie);

let frase='Mari Carmo rodrigues!';
frase.slice(9,12);
console.log(frase);
frase.slice(13);
console.log(frase);


let objetoLiteral={
    texto: 'meu texto',
    numero:16,
    array:true,
    metodo:function() {return 'olá'},
}
console.log();

