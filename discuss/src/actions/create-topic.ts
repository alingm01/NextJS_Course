'use server';

import { error } from 'console';
import { z } from 'zod';

const createTopicSchema = z.object({
  name: z.string().min(3).regex(/^[a-z-]+$/, {message: 'must be lowercase letters or dashes or spaces'}),
  description: z.string().min(10)
})

export async function createTopic(formData: FormData) {
  // TODO: revalidate the homepage

 const result = createTopicSchema.safeParse({
    name: formData.get('name'),
    description: formData.get('description')
  })

  if(!result.success) {
    console.log(result.error.flatten().fieldErrors)
  }
}