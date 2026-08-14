import { z } from 'zod'

/* Validation for the Hostelry booking + newsletter forms, recreated from the
   source behaviors: the dark booking widget requires arrival/departure dates
   with departure on or after arrival and shows a confirmation on success;
   the footer newsletter validates the email. Zod schemas keep typed values +
   per-field messages. */

export const bookingSchema = z
  .object({
    arrival: z.string().min(1, 'Please choose an arrival date'),
    departure: z.string().min(1, 'Please choose a departure date'),
    adults: z.string().min(1, 'Please choose the number of adults'),
    child: z.string().min(1, 'Please choose the number of children'),
    rooms: z.string().min(1, 'Please choose a room'),
  })
  .refine((data) => data.departure >= data.arrival, {
    message: 'Departure date must be on or after the arrival date',
    path: ['departure'],
  })

export type BookingValues = z.infer<typeof bookingSchema>

export const newsletterSchema = z.object({
  email: z.string().min(1, 'Please enter your email').email('Please enter a valid email'),
})

export type NewsletterValues = z.infer<typeof newsletterSchema>

export const initialBooking: BookingValues = {
  arrival: '',
  departure: '',
  adults: '',
  child: '',
  rooms: '',
}
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
