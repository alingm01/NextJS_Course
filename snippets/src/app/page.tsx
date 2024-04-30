import { db } from '@/db';

export default async function Home() {

  interface snippetType {
    id: number,
    title: string,
    code: string,
  }

  const snippets = await db.snippet.findMany();
  const renderedSnippets = snippets.map((snippet: snippetType) => {
    return (
      <div key={snippet.id}>
        {snippet.title}
      </div>
    )
  })

  return (
    <div>
      {renderedSnippets}
    </div>
  );
}
