import { db } from '@/db';
import { notFound } from 'next/navigation';

interface ShowSnippetInterface {
  params: {
    id: string
    title: string
  }
}

export default async function ShowSnippetPage(props: ShowSnippetInterface) {

  const snippet = await db.snippet.findFirst({
    where : {
      id: parseInt(props.params.id)
    }
  })

  if(!snippet) {
    notFound()
  }

  return (
    <div>
      {snippet.title}
    </div>
  )
}