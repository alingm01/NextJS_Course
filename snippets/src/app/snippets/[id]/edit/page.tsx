import { db } from '@/db';
import notFound from '../not-found';
import SnippetEditForm from '@/components/snippet-edit-form';

interface EditSnippetType {
  params: {
    id: string
  }
}

export default async function EditSnippet(props: EditSnippetType) {
  const id = parseInt(props.params.id)
  const snippet = await db.snippet.findFirst({
    where: { id }
  })

  if(!snippet) {
    return notFound()
  }

  return <div><SnippetEditForm snippet={snippet} /></div>
  
}