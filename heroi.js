// Importa a biblioteca readline-sync para capturar entradas do usuário
const readline = require('readline-sync');

// Captura o nome do herói
const nomeHeroi = readline.question("Digite o nome do herói: ");

// Captura a quantidade de XP do herói
const xpHeroi = parseInt(readline.question("Digite a quantidade de XP: "));

// Declara a variável para armazenar o nível do herói
let nivelHeroi;

// Estrutura de decisão para determinar o nível do herói com base no XP
if (xpHeroi < 1.000) {
    nivelHeroi = "Ferro";
} else if (xpHeroi >= 1.001 && xpHeroi <= 2.000) {
    nivelHeroi = "Bronze";
} else if (xpHeroi >= 2.001 && xpHeroi <= 5.000) {
    nivelHeroi = "Prata";
} else if (xpHeroi >= 6.001 && xpHeroi <= 7.000) {
    nivelHeroi = "Ouro";
} else if (xpHeroi >= 7.001 && xpHeroi <= 8.000) {
    nivelHeroi = "Platina";
} else if (xpHeroi >= 8.001 && xpHeroi <= 9.000) {
    nivelHeroi = "Ascendente";
} else if (xpHeroi >= 9.001 && xpHeroi <= 1.0000) {
    nivelHeroi = "Imortal";
} else if (xpHeroi >= 10.001) {
    nivelHeroi = "Radiante";
}

// Saída formatada
console.log(`O Herói de nome **${nomeHeroi}** está no nível de **${nivelHeroi}**`);
