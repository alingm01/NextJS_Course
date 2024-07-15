import { useState } from "react";
import BookEdit from "./BookEdit";

function BookShow({ book, onDelete }) {

  const [showEdit, SetShowEdit] = useState(false);

  const handleEditClick = () => {
    SetShowEdit(!showEdit);
  }

  const handleDeleteClick = () => {
    onDelete(book.id)
  }

  let context = <h3>{book.title}</h3>

  if(showEdit) {
    context = <BookEdit />
  }

  return (
  <div className="book-show">
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