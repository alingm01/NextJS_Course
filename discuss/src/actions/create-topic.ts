'use server';

import { auth } from '@/auth';
import { z } from 'zod';

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

  if(!session || !session.user) {
    return {
      errors: {
        _form: ['You need to be signed in to do this.']
      }
    }
  }

  return {errors: {}}
}