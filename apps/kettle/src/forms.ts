/** Local validation for both forms — nothing here makes a request. */

export type QuoteField = 'name' | 'phone' | 'problem'

/** Field order decides which control receives focus first. */
export const QUOTE_FIELDS: QuoteField[] = ['name', 'phone', 'problem']

export interface QuoteValues {
  name: string
  phone: string
  problem: string
}

export type QuoteErrors = Partial<Record<QuoteField, string>>

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function isEmail(value: string): boolean {
  return EMAIL.test(value.trim())
}

/** Digits only, so `(555) 090-0900` and `5550900900` both pass. */
export function isPhone(value: string): boolean {
  return value.replace(/\D/g, '').length >= 10
}

export function quoteError(field: QuoteField, value: string): string | undefined {
  if (value.trim() === '') {
    return 'This field is required'
  }

  if (field === 'phone' && !isPhone(value)) {
    return 'Please enter a phone number of at least ten digits'
  }

  return undefined
}

export function validateQuote(values: QuoteValues): QuoteErrors {
  const errors: QuoteErrors = {}

  QUOTE_FIELDS.forEach((field) => {
    const message = quoteError(field, values[field])

    if (message !== undefined) {
      errors[field] = message
    }
  })

  return errors
}

/**
 * Moves focus to the first invalid control. Kept out of the component so both
 * paths (some error, no error) are unit-testable without a DOM form.
 */
export function focusFirstInvalid(
  errors: QuoteErrors,
  focus: (field: QuoteField) => void,
): void {
  const first = QUOTE_FIELDS.find((field) => errors[field] !== undefined)

  if (first !== undefined) {
    focus(first)
  }
}

export function emailError(value: string): string | undefined {
  if (value.trim() === '') {
    return 'This field is required'
  }

  return isEmail(value) ? undefined : 'Please enter a valid email address'
}
