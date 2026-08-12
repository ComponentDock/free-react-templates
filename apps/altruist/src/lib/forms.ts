import { z } from 'zod'

/* Validation for the Altruist donation + newsletter forms, recreated from
   the source behaviors: the hero donation box and the overlapping banner
   donation form validate the amount client-side and show a confirmation;
   the footer newsletter validates the email. Zod schemas keep typed values
   + per-field messages. */

export const donationSchema = z.object({
  amount: z.string().min(1, 'Please enter a donation amount'),
})

export type DonationValues = z.infer<typeof donationSchema>

export const newsletterSchema = z.object({
  email: z.string().min(1, 'Please enter your email').email('Please enter a valid email'),
})

export type NewsletterValues = z.infer<typeof newsletterSchema>

export const initialDonation: DonationValues = { amount: '' }
export const initialNewsletter: NewsletterValues = { email: '' }

/* First error message per field for a failed schema parse; used by the
   forms to render per-field errors. */
export function fieldErrors(result: {
  success: false
  error: z.ZodError
}): Record<string, string | undefined> {
  const flattened = result.error.flatten().fieldErrors as Record<string, string[] | undefined>
  return Object.fromEntries(
    Object.entries(flattened).map(([field, messages]) => [field, messages?.[0]]),
  )
}

/* A valid donation amount must be a positive number (rejects 0, negatives,
   and non-numeric input after the non-empty check). */
export function isValidAmount(amount: string): boolean {
  const value = Number(amount)
  return Number.isFinite(value) && value > 0
}
