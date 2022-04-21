"use strict";
const book = {
    id: 1,
    title: 'Naruto',
    author: 'Joshua'
};
const books = [];
function getBook() {
    return { id: 1, title: 'Naruto', author: 'Joshua' };
}
const myBook = getBook();
function createBook(book) {
    return book;
}
const newBook = {
    id: 2,
    title: 'OnePiece',
    author: 'Perry',
    coAuthor: 'Fernando'
};
createBook(newBook);
