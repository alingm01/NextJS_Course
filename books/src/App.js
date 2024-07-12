import { useState } from "react";
import BookCreate from "./components/BookCreate"

export default function App() {
  const [books, setBooks] =useState([]);

  function createBook(title) {
   const updatedBooks = [
    ...books,
    { id: 123, title}
   ];

   setBooks(updatedBooks);
  }

  return (
    <BookCreate onCreate = {createBook} />
  )
}