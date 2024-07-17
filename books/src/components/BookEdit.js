import { useState } from "react";

function BookEdit({ book, onEdit }) {

  const [title, setTitle] = useState(book.title);

  function handleChange(event) {
    setTitle(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    onEdit(book.id, title)
  }

  return (
    <form className="book-edit" onSubmit={handleSubmit}>
      <label>Title</label>
      <input className="input" value={title} onChange={handleChange}/>
      <button className="button is-primary">
        Save
      </button>

    </form>
  )
}

export default BookEdit;