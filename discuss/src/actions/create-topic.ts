'use server';

import { auth } from '@/auth';
import { z } from 'zod';
import type { Topic } from '@prisma/client';
import { db } from '@/db';
import paths from '@/paths';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import descope from 'next-auth/providers/descope';

const createTopicSchema = z.object({
  name: z.string().min(3).regex(/^[a-z-]+$/, {message: 'must be lowercase letters or dashes or spaces'}),
  description: z.string().min(10)
})

interface createTopicFormState {
  errors: {
    name?: string[],
    description?: string[],
    _form?: string[],
  }
}

export async function createTopic(formState: createTopicFormState, formData: FormData): Promise<createTopicFormState> {
  // TODO: revalidate the homepage

 const result = createTopicSchema.safeParse({
    name: formData.get('name'),
    description: formData.get('description')
  })

  const session = auth();

  if(!result.success) {
    return {errors: result.error.flatten().fieldErrors}
  }

  if(!session) {
    return {
      errors: {
        _form: ['You need to be signed in to do this.']
      }
    }
  }

  let topic: Topic;
 
  try {
    topic = await db.topic.create({
      data: {
        slug: result.data.name,
        description: result.data.description,
      }
    })
  } catch(error: unknown) {

    if(error instanceof Error) {
      return {
        errors: {
          _form: [error.message]
        }
      }
    } else {
      return {
        errors: {
          _form: ["Problem has occured"]
        }
      }
    }
  }

  revalidatePath('/');
  redirect(paths.topicShow(topic.slug))
}