import { z } from 'zod'

/* Validation for the three Haulage forms, recreated from the source
   behaviors: the hero tracking form, the contact form, and the footer
   newsletter form. Zod schemas keep typed values + per-field messages. */

export const trackingSchema = z.object({
  trackingNumber: z.string().min(1, 'Please enter your tracking number'),
})

export type TrackingValues = z.infer<typeof trackingSchema>

export const contactSchema = z.object({
  firstName: z.string().min(1, 'Please enter your first name'),
  lastName: z.string().min(1, 'Please enter your last name'),
  email: z.string().min(1, 'Please enter your email').email('Please enter a valid email'),
  message: z.string().min(1, 'Please write a message'),
})

export type ContactValues = z.infer<typeof contactSchema>

export const newsletterSchema = z.object({
  email: z.string().min(1, 'Please enter your email').email('Please enter a valid email'),
})

export type NewsletterValues = z.infer<typeof newsletterSchema>

export const initialTracking: TrackingValues = { trackingNumber: '' }
export const initialContact: ContactValues = { firstName: '', lastName: '', email: '', message: '' }
export const initialNewsletter: NewsletterValues = { email: '' }

/* First error message per field for a failed schema parse; used by all
   three forms to render per-field errors. */
export function fieldErrors(result: {
  success: false
  error: z.ZodError
}): Record<string, string | undefined> {
  const flattened = result.error.flatten().fieldErrors as Record<string, string[] | undefined>
  return Object.fromEntries(
    Object.entries(flattened).map(([field, messages]) => [field, messages?.[0]]),
  )
}
