'use server';

import { divider } from '@nextui-org/react';
import { error } from 'console';
import { z } from 'zod';

const createTopicSchema = z.object({
  name: z.string().min(3).regex(/^[a-z-]+$/, {message: 'must be lowercase letters or dashes or spaces'}),
  description: z.string().min(10)
})

interface createTopicFormState {
  errors: {
    name?: string[],
    description?: string[],
  }
}

export async function createTopic(formState: createTopicFormState, formData: FormData): Promise<createTopicFormState> {
  // TODO: revalidate the homepage

 const result = createTopicSchema.safeParse({
    name: formData.get('name'),
    description: formData.get('description')
  })

  if(!result.success) {
    return {errors: result.error.flatten().fieldErrors}
  }

  return {errors: {}}
}