import { z } from 'zod'

export const contactSchema = z.object({
  name: z.string().trim().min(1, 'Please enter your name'),
  email: z.string().trim().email('Please enter a valid email address'),
  subject: z.string().trim().min(1, 'Please enter your subject'),
  message: z.string().trim().min(1, 'Please enter your message'),
})

export type ContactValues = z.infer<typeof contactSchema>

export const newsletterSchema = z.object({
  email: z.string().trim().email('Please enter a valid email address'),
})

export type NewsletterValues = z.infer<typeof newsletterSchema>

export function fieldErrors<K extends string>(error: z.ZodError): Partial<Record<K, string>> {
  const errors: Partial<Record<K, string>> = {}
  for (const issue of error.issues) {
    errors[issue.path[0] as K] = issue.message
  }
  return errors
}
