/*Lösning till uppgift 5 - Arrayer. Av Mia Höglund, 2026*/

"use strict";

const food = ["Pannkakor", "Pizza", "Palt", "Pyttipanna", "Pasta",]; //kan fortfarande ändra innehållet i arrayen trots variabel const
console.log(food); //skriver ut hela arrayen.
console.log(food[0]); //skriver ut första elementet, startar på 0.
console.log(food[4]); //skriver ut sista elementet.
food.push("Potatisbullar"); //push lägger till nytt element sist.
console.log(food); //kontroll av push.
food.shift(); //ta bort första maträtt
console.log(food); //kontroll av shift, utskrift av arrayen efter förändringarna
