import { z } from 'zod'

/* Validation for the Riviera booking card + newsletter forms, recreated
   from the source behaviors: the check-availability card validates the
   dates (dd/mm/yyyy), guest counts and room selection; the footer
   newsletter validates the email. Zod schemas keep typed values + per-field
   messages. */

const datePattern = /^\d{2}\s?\/\s?\d{2}\s?\/\s?\d{4}$/

export const bookingSchema = z.object({
  fromDate: z
    .string()
    .min(1, 'Please enter a check-in date')
    .regex(datePattern, 'Please use the dd / mm / yyyy format'),
  toDate: z
    .string()
    .min(1, 'Please enter a check-out date')
    .regex(datePattern, 'Please use the dd / mm / yyyy format'),
  adults: z.number().min(1, 'At least one adult is required'),
  children: z.number().min(0, 'Children cannot be negative'),
  rooms: z.number().min(1, 'At least one room is required'),
  roomType: z.string().min(1, 'Please choose a room type'),
})

export type BookingValues = z.infer<typeof bookingSchema>

export const newsletterSchema = z.object({
  email: z.string().min(1, 'Please enter your email').email('Please enter a valid email'),
})

export const initialBooking: BookingValues = {
  fromDate: '',
  toDate: '',
  adults: 0,
  children: 0,
  rooms: 0,
  roomType: '',
}

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
