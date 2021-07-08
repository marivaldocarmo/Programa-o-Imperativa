var valor = parseInt(gets());
var Cem = parseInt(Math.floor(valor / 100));
var Cinquenta = parseInt(Math.floor((valor % 100) / 50));
var Vinte = parseInt(Math.floor(((valor % 100) % 50) / 20));
var Dez = parseInt(Math.floor((((valor % 100) % 50) % 20) / 10));
var Cinco = parseInt(Math.floor(((((valor % 100) % 50) % 20) % 10) / 5));
var Dois = parseInt(Math.floor((((((valor % 100) % 50) % 20) % 10) % 5) / 2));
var Um = parseInt(Math.floor(((((((valor % 100) % 50) % 20) % 10) % 5) % 2) / 1));
console.log(Cem + " nota(s) de R$ 100,00\n" + Cinquenta + " nota(s) de R$ 50,00\n"
    + Vinte + " nota(s) de R$ 20,00\n" + Dez + " nota(s) de R$ 10,00\n" + Cinco +
    " nota(s) de R$ 5,00\n" + Dois + " nota(s) de R$ 2,00\n" + Um + " nota(s) de R$ 1,00");