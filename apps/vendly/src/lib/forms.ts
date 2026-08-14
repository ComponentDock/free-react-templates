import { z } from 'zod'

/* Validation for the Vendly subscribe form (footer). The source has no
   backend — the email is validated client-side and a success state
   replaces the input row. Zod keeps typed values + per-field messages. */

export const subscribeSchema = z.object({
  email: z.string().min(1, 'Please enter your email').email('Please enter a valid email'),
})

export type SubscribeValues = z.infer<typeof subscribeSchema>

export const initialSubscribe: SubscribeValues = { email: '' }

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
