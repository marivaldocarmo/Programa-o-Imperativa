/*imc=peso(kg)/ altura (m)ao quadrado. transformar a altura em m--> /100 
altura ao quadrado--> altura*altura altura**2 Mth.pow(altura,2)*/

function calcularIndiceDeMassaCorporal(peso, altura)
{
    //altura deve ser em m - converter
    altura= altura/100;

    return (peso/(altura*altura)).toFixed(2);
    //ou return peso/Math.pow(altura,2);
    //ou return peso/altura**2;
}

//invocando a função
console.log('IMC= '+calcularIndiceDeMassaCorporal(70,168));
