"use server";

import { redirect } from 'next/navigation';
import { db } from '@/db';
import { revalidatePath } from 'next/cache';

export async function editSnippet(id: number, code: string) {
  await db.snippet.update({
    where: { id },
    data: { code }
    }
  )

 redirect(`/snippets/${id}`)
}

export async function deleteSnippet(id: number) {
  await db.snippet.delete({
    where: { id }
  })

 revalidatePath('/')
 redirect('/'); 
}

export async function createSnippet(formState: {message: string}, form: FormData) {

  const title = form.get('title')
  const code = form.get('code')
  
  try {

  if(typeof title !== 'string' || title.length < 3) {
    return {
      message: 'Title needs at least 3 characters'
    }
  }

  if(typeof code !== 'string' || code.length < 10) {
    return {
      message: 'Code needs at least 10 characters'
    }
  }

  
    const snippet = await db.snippet.create({
      data: {
        title,
        code,
      }
    })
  } catch(err: unknown) {
    if(err instanceof Error) {
      return {
        message: err.message
      }
    } else {
      return {
        message: 'Something went wrong...'
      }
    }
  }

  revalidatePath('/');
  redirect('/');
}
