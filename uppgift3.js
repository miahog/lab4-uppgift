/*Lösning till uppgift 3 - Villkor. Av Mia Höglund, 2026*/

"use strict";
const age = 67;
if (age < 18) {
    console.log("Barn");
}
else if (age < 65) {
    console.log("Vuxen"); //kopierat första uträkningen och lagt till "else if", samt ändrat ålder och sträng
}

else {
    console.log("Pensionär"); //behövs ej >65 då räknas ej åldern 65 in
}