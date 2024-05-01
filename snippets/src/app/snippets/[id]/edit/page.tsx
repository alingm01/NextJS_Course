interface EditSnippetType {
  params: {
    id: string
  }
}

export default function EditSnippet(props: EditSnippetType) {
  const id = parseInt(props.params.id)
  
  return (
    <div>
      Edit snippet with id {id}
    </div>
  )
}