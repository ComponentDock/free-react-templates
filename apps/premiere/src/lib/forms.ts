import { z } from 'zod'

/**
 * Subscription field: one e-mail address, trimmed and format-checked. The
 * presence check and the format check are piped so only one message ever
 * surfaces per submit.
 */
export const subscribeSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, 'Email is required')
    .pipe(z.email('Valid email is required: ex@abc.xyz')),
})

export type SubscribeValues = z.infer<typeof subscribeSchema>

/** Join the validation messages so the warning bubble can show them all. */
export function firstError(error: z.ZodError): string {
  return error.issues.map((issue) => issue.message).join(', ')
}
