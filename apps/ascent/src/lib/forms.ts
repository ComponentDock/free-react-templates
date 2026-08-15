import { z } from 'zod'

export const contactSchema = z.object({
  name: z.string().trim().min(1, 'Please enter your name'),
  email: z.string().trim().email('Please enter a valid email address'),
  subject: z.string().trim().min(1, 'Please enter a subject'),
  message: z.string().trim().min(1, 'Please enter a message'),
})

export type ContactValues = z.infer<typeof contactSchema>

export type FieldErrors = Partial<Record<keyof ContactValues, string>>

export function fieldErrors(result: { error: z.ZodError }): FieldErrors {
  const errors: FieldErrors = {}
  for (const issue of result.error.issues) {
    const key = issue.path[0] as keyof ContactValues
    if (key !== undefined && !errors[key]) {
      errors[key] = issue.message
    }
  }
  return errors
}
