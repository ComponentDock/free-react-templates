export const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function isValidEmail(value: string): boolean {
  return EMAIL_PATTERN.test(value.trim())
}

export interface EnquiryValues {
  name: string
  email: string
  /** Optional — a client may not know what to call the problem yet. */
  subject: string
  message: string
}

export type EnquiryErrors = Partial<Record<keyof EnquiryValues, string>>

/** Three rules, and each message says what to do rather than what went wrong. */
export function validateEnquiry(values: EnquiryValues): EnquiryErrors {
  const errors: EnquiryErrors = {}

  if (!values.name.trim()) {
    errors.name = 'Please give a name we can reply to.'
  }
  if (!values.email.trim()) {
    errors.email = 'An e-mail address is required.'
  } else if (!isValidEmail(values.email)) {
    errors.email = 'That address looks incomplete. Check it and send again.'
  }
  if (!values.message.trim()) {
    errors.message = 'Please say what the actual problem is.'
  }

  return errors
}
