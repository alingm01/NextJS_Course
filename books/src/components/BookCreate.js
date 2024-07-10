import { useState } from "react";

function BookCreate({onCreate}) {
  const [title, setTitle] = useState('')
  
  function handleChange(event) {
    setTitle(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault();
    onCreate(title)
    setTitle('')
  }
  return <div>
    <form onSubmit={handleSubmit}>
      <label>Title</label>
      <input value={title} onChange={handleChange} />
      <button>Create!</button>
    </form>
  </div>

}

export default BookCreate;