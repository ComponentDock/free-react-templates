import { z } from 'zod'

/** The e-mail shape the design's own field check accepts. */
export const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

const NAME_REQUIRED = 'Name is required'
const EMAIL_REQUIRED = 'Email is required: ex@abc.xyz'

/**
 * Get-updates fields: one required name and one required, format-checked
 * e-mail. Both e-mail checks carry the same message so a field always raises
 * exactly the single line its bubble shows.
 */
export const getUpdatesSchema = z.object({
  name: z.string().trim().min(1, NAME_REQUIRED),
  email: z.string().trim().min(1, EMAIL_REQUIRED).regex(EMAIL_PATTERN, EMAIL_REQUIRED),
})

export type GetUpdatesValues = z.infer<typeof getUpdatesSchema>

export type GetUpdatesField = keyof GetUpdatesValues

/** Keep one message per field so each bubble carries a single line. */
export function fieldErrors(error: z.ZodError): Partial<Record<GetUpdatesField, string>> {
  const messages: Partial<Record<GetUpdatesField, string>> = {}

  for (const issue of error.issues) {
    const field = issue.path[0] as GetUpdatesField
    messages[field] = issue.message
  }

  return messages
}
