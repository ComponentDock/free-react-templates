import { z } from 'zod'

export const callbackSchema = z.object({
  name: z.string().trim().min(1, 'Please enter your name'),
  email: z.string().trim().email('Please enter a valid email address'),
  phone: z.string().trim().optional(),
  services: z.string(),
  message: z.string().trim().min(1, 'Please enter a message'),
})

export type CallbackValues = z.infer<typeof callbackSchema>

export function fieldErrors(result: {
  error: z.ZodError
}): Partial<Record<keyof CallbackValues, string>> {
  const errors: Partial<Record<keyof CallbackValues, string>> = {}
  for (const issue of result.error.issues) {
    errors[issue.path[0]! as keyof CallbackValues] = issue.message
  }
  return errors
}
