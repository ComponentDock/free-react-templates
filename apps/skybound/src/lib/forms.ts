import { z } from 'zod'

const required = (message: string) => z.string().trim().min(1, message)

export const packageSearchSchema = z.object({
  destination: required('Please enter your destination'),
  checkIn: required('Please choose a check in date'),
  checkOut: required('Please choose a check out date'),
  adults: required('Please choose the number of adults'),
  children: required('Please choose the number of children'),
})

export type PackageSearchValues = z.infer<typeof packageSearchSchema>

export const newsletterSchema = z.object({
  email: z.string().trim().email('Please enter a valid email address'),
})

export type NewsletterValues = z.infer<typeof newsletterSchema>

export function fieldErrors<K extends string>(error: z.ZodError): Partial<Record<K, string>> {
  const errors: Partial<Record<K, string>> = {}
  for (const issue of error.issues) {
    errors[issue.path[0] as K] = issue.message
  }
  return errors
}
