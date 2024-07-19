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

  function onEdit(bookId, newTitle) {
    const updatedBooks = books.map((book) => {
      if(book.id === bookId) {
        return {
          ...book,
          title: newTitle
        }
      }
    
      return book;
    })

    setBooks(updatedBooks)
  }

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList books={books} onDelete={deleteBook} onEdit={onEdit}/>
      <BookCreate onCreate = {createBook} />
    </div>
  )
}