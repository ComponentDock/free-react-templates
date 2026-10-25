/** Local validation for the footer newsletter — nothing here makes a request. */

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function isEmail(value: string): boolean {
  return EMAIL.test(value.trim())
}

export function emailError(value: string): string | undefined {
  if (value.trim() === '') {
    return 'This field is required'
  }

  return isEmail(value) ? undefined : 'Please enter a valid email address'
}
