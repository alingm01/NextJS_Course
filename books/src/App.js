import { useState } from "react";
import BookCreate from "./components/BookCreate"

export default function App() {
  const [books, setBooks] =useState([]);

  function createBook(title) {
   console.log('need to creat book:', title)
  }

  return (
    <BookCreate onCreate = {createBook} />
  )
}