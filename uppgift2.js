/*Lösning till uppgift 2. Av Mia Höglund, 2026*/

"use strict";

const price = 100; //använder variabeln const denna gång, den kommer ej ändras. Datatypen är number.
const amount = 3; //antal

const totalPrice = price * amount;
const moms = totalPrice * 0.25; //25%=0.25
const totalPriceMoms = totalPrice + moms;

/*Utskrift*/
console.log("Pris: " + price);
console.log("Antal: " + amount);
console.log("Totalt: " + totalPrice);
console.log("Totalt inklusive moms: " + totalPriceMoms);