import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

export default function App() {
  const [books, setBooks] =useState([]);

  let id = Math.floor(Math.random() * 9999);

  function deleteBook(id) {
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });

    setBooks(updatedBooks);
  }

  function createBook(title) {
   const updatedBooks = [
    ...books,
    { id, title}
   ];

   setBooks(updatedBooks);
  }

  return (
    <div className="app">
      <BookList books={books} onDelete={deleteBook}/>
      <BookCreate onCreate = {createBook} />
    </div>
  )
}