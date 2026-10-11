import { z } from 'zod'

/**
 * Subscribe fields: one required name and one required, format-checked e-mail.
 * The presence and format checks are piped so a field raises exactly one
 * message, mirroring the single bubble the dialog shows.
 */
export const subscribeSchema = z.object({
  name: z.string().trim().min(1, 'Name is required'),
  email: z
    .string()
    .trim()
    .min(1, 'Email is required')
    .pipe(z.email('Valid email is required: ex@abc.xyz')),
})

export type SubscribeValues = z.infer<typeof subscribeSchema>

export type SubscribeField = keyof SubscribeValues

/** Keep the first message per field so each bubble carries a single line. */
export function fieldErrors(error: z.ZodError): Partial<Record<SubscribeField, string>> {
  const messages: Partial<Record<SubscribeField, string>> = {}

  for (const issue of error.issues) {
    const field = issue.path[0]

    if ((field === 'name' || field === 'email') && !messages[field]) {
      messages[field] = issue.message
    }
  }

  return messages
}
