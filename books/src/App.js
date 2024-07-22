import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import axios from "axios";

export default function App() {
  const [books, setBooks] =useState([]);

  let id = Math.floor(Math.random() * 9999);

  function deleteBook(id) {
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });

    setBooks(updatedBooks);
  }

  async function createBook(title) {

    const response = await axios.post('http://localhost:3001/books', {
      title
    });

    const updatedBooks = [
      ...books,
      response.data
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