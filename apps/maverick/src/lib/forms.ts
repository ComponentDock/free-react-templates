import { z } from 'zod'

/* Validation for the Maverick contact form, recreated from the source
   behavior: the contact form validates client-side (name, email, subject,
   message) and shows a confirmation. Zod schemas keep typed values +
   per-field messages. */

export const contactSchema = z.object({
  name: z.string().min(1, 'Please enter your name'),
  email: z.string().min(1, 'Please enter your email').email('Please enter a valid email'),
  subject: z.string().min(1, 'Please enter a subject'),
  message: z.string().min(1, 'Please enter a message'),
})

export type ContactValues = z.infer<typeof contactSchema>

export const initialContact: ContactValues = { name: '', email: '', subject: '', message: '' }

/* First error message per field for a failed schema parse; used by the
   form to render per-field errors. */
export function fieldErrors(result: {
  success: false
  error: z.ZodError
}): Record<string, string | undefined> {
  const flattened = result.error.flatten().fieldErrors as Record<string, string[] | undefined>
  return Object.fromEntries(
    Object.entries(flattened).map(([field, messages]) => [field, messages?.[0]]),
  )
}
