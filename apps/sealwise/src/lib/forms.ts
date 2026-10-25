export const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function isValidEmail(value: string): boolean {
  return EMAIL_PATTERN.test(value.trim())
}

export interface QuoteValues {
  name: string
  phone: string
  problem: string
}

export type QuoteErrors = Partial<Record<keyof QuoteValues, string>>

/** Digits only, so the same rule accepts "(555) 040-0400" and "5550400400". */
export function digitsOf(value: string): string {
  return value.replace(/\D/g, '')
}

/** Three fields, three rules, and each message says what to do next. */
export function validateQuote(values: QuoteValues): QuoteErrors {
  const errors: QuoteErrors = {}

  if (!values.name.trim()) {
    errors.name = 'Please give a name we can reply to.'
  }
  const digits = digitsOf(values.phone)
  if (!digits) {
    errors.phone = 'A phone number we can reach you on is required.'
  } else if (digits.length < 10) {
    errors.phone = 'That number is too short. Include the area code.'
  }
  if (!values.problem.trim()) {
    errors.problem = 'Pick the closest match so we send the right price.'
  }

  return errors
}

export function validateNewsletter(email: string): string | null {
  if (!email.trim()) {
    return 'Enter the address you want the reminders sent to.'
  }
  return isValidEmail(email) ? null : 'That address looks incomplete. Check it and send again.'
}
