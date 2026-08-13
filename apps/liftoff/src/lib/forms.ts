import { z } from 'zod'

/* Validation for the Liftoff contact form, recreated from the source
   behavior: labeled square-cornered inputs with per-field errors and a
   success swap after a valid send. Zod schemas keep typed values +
   per-field messages. */

export const contactSchema = z.object({
  firstName: z.string().min(1, 'Please enter your first name'),
  lastName: z.string().min(1, 'Please enter your last name'),
  email: z.string().min(1, 'Please enter your email').email('Please enter a valid email'),
  subject: z.string().min(1, 'Please enter a subject'),
  message: z.string().min(1, 'Please enter a message'),
})

export type ContactValues = z.infer<typeof contactSchema>

export const initialContact: ContactValues = {
  firstName: '',
  lastName: '',
  email: '',
  subject: '',
  message: '',
}

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
