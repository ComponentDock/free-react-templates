import { z } from 'zod'

/** The e-mail shape the design's own field check accepts. */
export const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

const EMAIL_REQUIRED = 'Valid email is required: ex@abc.xyz'

/**
 * Subscribe field: one required, format-checked e-mail. Both checks carry the
 * same message so the field always raises exactly the single line its bubble
 * shows.
 */
export const subscribeSchema = z.object({
  email: z.string().trim().min(1, EMAIL_REQUIRED).regex(EMAIL_PATTERN, EMAIL_REQUIRED),
})

export type SubscribeField = keyof z.infer<typeof subscribeSchema>

/** Keep one message per field so each bubble carries a single line. */
export function fieldErrors(error: z.ZodError): Partial<Record<SubscribeField, string>> {
  const messages: Partial<Record<SubscribeField, string>> = {}

  for (const issue of error.issues) {
    const field = issue.path[0] as SubscribeField
    messages[field] = issue.message
  }

  return messages
}
