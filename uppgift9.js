/*Lösning till uppgift 9 - Sammanhängade program. Av Mia Höglund, 2026*/

"use strict";

const people = [
    {
        name: "Lisa",
        age: "20",
        city: "Luleå",
    },
    {
        name: "Leo",
        age: "30",
        city: "Malmö",
    },
    {
        name: "Lovisa",
        age: "15",
        city: "Stockholm",
    },

];

function printPerson(person) {

    if (person.age >= 18) {
        console.log(person.name + " bor i " + person.city + " och är myndig. ");
    } else {
        console.log(person.name + " bor i " + person.city + " och är inte myndig.");
    }

}
for (let i = 0; i < people.length; i++) {
    printPerson(people[i]);
}