interface Book{
  id: number
  title: string
  author: string
  coAuthor?: string
  isLoan?: (id: number) => void
}

const book: Book = {
  id: 1,
  title: 'Naruto',
  author: 'Joshua'
}

const books: Book[] = []

function getBook():Book {
  return {id: 1, title: 'Naruto', author:'Joshua' }
}

const myBook = getBook()

function createBook(book: Book): Book{
  return book;
}

const newBook: Book = {
  id: 2,
  title: 'OnePiece',
  author: 'Perry',
  coAuthor: 'Fernando'
}
createBook(newBook)
