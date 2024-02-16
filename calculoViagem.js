// faça um programa para calcular o valor de uma viagem

// voce tera 6 variaveis. Sendo elas:
// 1 - preço do etanol;
// 2 - preço do alcool;
// 3 - preço gasolina;
// 4 - tipo de combustivel do carro
// 5 - gasto media de combustivel do carro por KM
// 6 - distancia da viagem em Km


let precoEtanol = 5.79;
let precoGasolina = 6.79;
let precoAlcool = 4.79;
let kmPorLitros = 10;
let distancia = 100;
let tipoCombustivel = "etanol";

const litrosConsumidos =  distancia / kmPorLitros;

if (tipoCombustivel === "etanol") {
    const valorGasto = litrosConsumidos * precoEtanol;
    console.log("o valor que ira gastar de combustivel (Etanol) sera: " + valorGasto.toFixed(2));    
}else if (tipoCombustivel === "gasolina") {
    const valorGasto = litrosConsumidos * precoGasolina;
    console.log("o valor que ira gastar de combustivel (Gasolina) sera: " + valorGasto.toFixed(2));
}else {
    const valorGasto = litrosConsumidos * precoAlcool;
    console.log("o valor que ira gastar de combustivel (Alcool) sera: " + valorGasto.toFixed(2));
}

