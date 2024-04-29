

export default function SnippetsCreatePage() {

  return(
    <div>
      <div>
        <form >
          <label htmlFor="title">Title</label>
          <input type="text" name="title" id="title" className="w-full p-2 border-2" />
          <label htmlFor="code">Title</label>
          <textarea name="code" id="code" className="w-full p-2 border-2" />
        </form >
      </div>
    </div>
  )
}