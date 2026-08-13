export interface AppointmentValues {
  name: string
  email: string
  date: string
  message: string
}

export interface AppointmentErrors {
  name?: string
  email?: string
  date?: string
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function validateAppointment(values: AppointmentValues): AppointmentErrors {
  const errors: AppointmentErrors = {}
  if (!values.name.trim()) {
    errors.name = 'Name is required'
  }
  if (!values.email.trim()) {
    errors.email = 'Email is required'
  } else if (!EMAIL_RE.test(values.email.trim())) {
    errors.email = 'Enter a valid email address'
  }
  if (!values.date) {
    errors.date = 'Date is required'
  }
  return errors
}

export function isValidAppointment(values: AppointmentValues): boolean {
  return Object.keys(validateAppointment(values)).length === 0
}
