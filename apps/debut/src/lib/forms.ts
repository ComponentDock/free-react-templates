import { z } from 'zod'

/** Subscription fields: a name and a valid email address (design's own rules). */
export const subscribeSchema = z.object({
  name: z.string().trim().min(1, 'Name is required'),
  email: z.string().trim().min(1, 'Email is required').email('Email is required: ex@abc.xyz'),
})

export type SubscribeValues = z.infer<typeof subscribeSchema>

export function fieldErrors(error: z.ZodError): Partial<Record<keyof SubscribeValues, string>> {
  const errors: Partial<Record<keyof SubscribeValues, string>> = {}
  for (const issue of error.issues) {
    errors[issue.path[0] as keyof SubscribeValues] = issue.message
  }
  return errors
}
