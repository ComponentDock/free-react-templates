/** Shape shared by both forms: a message only when the value is unusable. */
export type FieldErrors<T extends string> = Partial<Record<T, string>>

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function isEmail(value: string): boolean {
  return EMAIL.test(value.trim())
}

export function requiredError(value: string): string | undefined {
  return value.trim() === '' ? 'This field is required' : undefined
}

export function emailError(value: string): string | undefined {
  if (value.trim() === '') {
    return 'This field is required'
  }
  return isEmail(value) ? undefined : 'Please enter a valid email address'
}
