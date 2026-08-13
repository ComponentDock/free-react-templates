export interface AppointmentValues {
  name: string
  phone: string
  doctor: string
  email: string
  message: string
}

export interface AppointmentErrors {
  name?: string
  phone?: string
  doctor?: string
  email?: string
  message?: string
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

/** Pure appointment-form validation: every field is required and the email
 *  must be well-formed. Returns the per-field error map (empty when valid).
 *  Kept as a pure exported function so the 100%-coverage tests can exercise
 *  every branch without DOM interaction. */
export function validateAppointment(values: AppointmentValues): AppointmentErrors {
  const errors: AppointmentErrors = {}
  if (values.name.trim() === '') {
    errors.name = 'Name is required'
  }
  if (values.phone.trim() === '') {
    errors.phone = 'Phone is required'
  }
  if (values.doctor === '') {
    errors.doctor = 'Please choose a doctor'
  }
  if (values.email.trim() === '') {
    errors.email = 'Email address is required'
  } else if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = 'Please enter a valid email address'
  }
  if (values.message.trim() === '') {
    errors.message = 'Message is required'
  }
  return errors
}

export function hasErrors(errors: AppointmentErrors): boolean {
  return Object.keys(errors).length > 0
}
