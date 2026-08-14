export interface ContactValues {
  firstName: string
  lastName: string
  email: string
  subject: string
  message: string
}

export type ContactErrors = Partial<Record<keyof ContactValues, string>>

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

/** Inline validation for the presentational contact form: every field is
 *  required and the email must look like an email address. */
export function validateContact(values: ContactValues): ContactErrors {
  const errors: ContactErrors = {}

  if (!values.firstName.trim()) {
    errors.firstName = 'First name is required'
  }
  if (!values.lastName.trim()) {
    errors.lastName = 'Last name is required'
  }
  if (!values.email.trim()) {
    errors.email = 'Email is required'
  } else if (!EMAIL_PATTERN.test(values.email)) {
    errors.email = 'Please enter a valid email address'
  }
  if (!values.subject.trim()) {
    errors.subject = 'Subject is required'
  }
  if (!values.message.trim()) {
    errors.message = 'Message is required'
  }

  return errors
}

export function hasErrors(errors: ContactErrors): boolean {
  return Object.keys(errors).length > 0
}
