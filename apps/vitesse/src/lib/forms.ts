import { z } from 'zod'

export const trackingSchema = z.object({
  trackingId: z.string().trim().min(1, 'Please enter a tracking ID'),
})

export type TrackingValues = z.infer<typeof trackingSchema>

export const quoteSchema = z.object({
  name: z.string().trim().min(1, 'Please enter your name'),
  email: z.string().trim().email('Please enter a valid email address'),
  phone: z.string().trim().min(1, 'Please enter a contact number'),
  freight: z.string().trim().min(1, 'Please choose a freight type'),
  departure: z.string().trim().min(1, 'Please enter a city of departure'),
  incoterms: z.string().trim(),
  weight: z.string().trim(),
  height: z.string().trim(),
  width: z.string().trim(),
  length: z.string().trim(),
})

export type QuoteValues = z.infer<typeof quoteSchema>

export function fieldErrors<K extends string>(error: z.ZodError): Partial<Record<K, string>> {
  const errors: Partial<Record<K, string>> = {}
  for (const issue of error.issues) {
    errors[issue.path[0] as K] = issue.message
  }
  return errors
}
