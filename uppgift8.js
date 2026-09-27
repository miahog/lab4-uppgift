/*Lösning till uppgift 8 - Objekt. Av Mia Höglund, 2026*/

"use strict";

const book = { //book variabel som innehåller ett objekt med tre egenskaper
    title: "The Hobbit",
    author: "J.R.R Tolkien",
    publicationYear: 1937
};

function printBook(book) {
    console.log("Titel: " + book.title);
    console.log("Författare: " + book.author);
    console.log("Utgivningsår: " + book.publicationYear);
}
printBook(book);