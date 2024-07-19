import { useState } from "react";
import BookEdit from "./BookEdit";

function BookShow({ book, onDelete, onEdit }) {

  const [showEdit, setShowEdit] = useState(false);

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  }

  const handleDeleteClick = () => {
    onDelete(book.id)
  }

  const handleSubmit = (id, title) => {
    setShowEdit(false);
    onEdit(id, title)
  }

  let context = <h3>{book.title}</h3>

  if(showEdit) {
    context = <BookEdit book={book} onSubmit={handleSubmit}/>
  }

  return (
  <div className="book-show">
    <img src={`https://picsum.photos/seed/${book.id}/300/200`} alt="bookso"/>
    {context}
    <div className="actions">
      <button className="edit" onClick={handleEditClick}>
        Edit
      </button>
      <button className="delete" onClick={handleDeleteClick}>
        Delete
      </button>
    </div>
  </div>
  )
}

export default BookShow;