export interface ContactValues {
  firstName: string
  lastName: string
  email: string
  subject: string
  message: string
}

export interface ContactErrors {
  firstName?: string
  lastName?: string
  email?: string
  subject?: string
  message?: string
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

/** Pure contact-form validation: every field is required and the email must
 *  be well-formed. Returns the per-field error map (empty when valid).
 *  Kept as a pure exported function so the 100%-coverage tests can exercise
 *  every branch without DOM interaction. */
export function validateContact(values: ContactValues): ContactErrors {
  const errors: ContactErrors = {}
  if (values.firstName.trim() === '') {
    errors.firstName = 'First name is required'
  }
  if (values.lastName.trim() === '') {
    errors.lastName = 'Last name is required'
  }
  if (values.email.trim() === '') {
    errors.email = 'Email address is required'
  } else if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = 'Please enter a valid email address'
  }
  if (values.subject.trim() === '') {
    errors.subject = 'Subject is required'
  }
  if (values.message.trim() === '') {
    errors.message = 'Message is required'
  }
  return errors
}

export function hasErrors(errors: ContactErrors): boolean {
  return Object.keys(errors).length > 0
}
