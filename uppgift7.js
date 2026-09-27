/*Lösning till uppgift 7 - Arrayer och funktioner. Av Mia Höglund, 2026*/

"use strict";

const numbers = [5, 7, 2, 12, 1, 4,]

function calculateSum(numbers) {
    let sum = 0; //använde let för summan kommer att ändras

    for (let i = 0; i < numbers.length; i++) {
        sum = sum + numbers[i];
    }

    return sum; //loopen räknar ut salen
}

console.log("Summan är " + calculateSum(numbers));