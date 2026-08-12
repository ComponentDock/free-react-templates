import { z } from 'zod'

/* Validation for the Flair footer newsletter form, recreated from the
   source behavior: the newsletter validates the email address. The zod
   schema keeps typed values + per-field messages. */

export const newsletterSchema = z.object({
  email: z.string().min(1, 'Please enter your email').email('Please enter a valid email'),
})

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
