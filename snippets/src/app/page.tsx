import { db } from '@/db';
import Link from 'next/link';

export default async function Home() {

  interface snippetType {
    id: number,
    title: string,
    code: string,
  }

  const snippets = await db.snippet.findMany();
  const renderedSnippets = snippets.map((snippet: snippetType) => {
    return (
      <Link 
        href={`/snippets/${snippet.id}`}
        key={snippet.id}
        className='flex justify-between border items-center rounded p-2'  
      >
        <div>{snippet.title}</div>
        <div>View</div>
      </Link>
    )
  })

  return (
    <div>
      <div className='flex m-2 justify-between items-center'>
        <h1 className='text-xl font-bold'>
          Snippets
        </h1>
        <Link href="/snippets/new" className='p-2 border rounded'>
          New
        </Link>
      </div>
      <div className='flex flex-col gap-2'>
        {renderedSnippets}
      </div>
    </div>
  );
}
