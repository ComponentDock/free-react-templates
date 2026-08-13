import { z } from 'zod'

/* Validation for the Cargomate quote form and footer newsletter, recreated
   from the source behaviors: the quote card's ten fields are all required
   (with a valid email), the newsletter only needs a well-formed address.
   Zod schemas keep typed values + per-field messages. */

export const quoteSchema = z.object({
  'First name': z.string().min(1, 'Please enter your first name'),
  'Last name': z.string().min(1, 'Please enter your last name'),
  'Email Address': z.string().min(1, 'Please enter your email').email('Please enter a valid email'),
  'Cargo Type': z.string().min(1, 'Please enter the cargo type'),
  'Country of Origin': z.string().min(1, 'Please enter the country of origin'),
  Destination: z.string().min(1, 'Please enter the destination'),
  Quantity: z.string().min(1, 'Please enter the quantity'),
  Weight: z.string().min(1, 'Please enter the weight'),
  Width: z.string().min(1, 'Please enter the width'),
  Height: z.string().min(1, 'Please enter the height'),
})

export type QuoteValues = z.infer<typeof quoteSchema>

export const initialQuote: QuoteValues = {
  'First name': '',
  'Last name': '',
  'Email Address': '',
  'Cargo Type': '',
  'Country of Origin': '',
  Destination: '',
  Quantity: '',
  Weight: '',
  Width: '',
  Height: '',
}

export const newsletterSchema = z.object({
  email: z.string().min(1, 'Please enter your email').email('Please enter a valid email'),
})

export type NewsletterValues = z.infer<typeof newsletterSchema>

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
