/** Small helpers shared by the booking card and the footer newsletter. */

export type FieldErrors<T extends string> = Partial<Record<T, string>>

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function isEmail(value: string): boolean {
  return EMAIL.test(value.trim())
}

export function requiredError(value: string): string | undefined {
  return value.trim() === '' ? 'This field is required' : undefined
}

/** Ten digits or more, however the visitor spaces them. */
export function phoneError(value: string): string | undefined {
  if (value.trim() === '') {
    return 'This field is required'
  }

  return value.replace(/\D/g, '').length >= 10 ? undefined : 'Please enter a phone number we can call'
}

export function emailError(value: string): string | undefined {
  if (value.trim() === '') {
    return 'This field is required'
  }

  return isEmail(value) ? undefined : 'Please enter a valid email address'
}
