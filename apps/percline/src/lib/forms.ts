import { EMAIL_PATTERN, PHONE_PATTERN } from '../content'

export const REQUIRED = 'This field is required.'
export const PHONE_ERROR = 'Enter a phone number we can call back on.'
export const NEED_ERROR = 'Choose the closest match.'

export function validateName(value: string): string | null {
  return value.trim().length === 0 ? REQUIRED : null
}

export function validatePhone(value: string): string | null {
  const trimmed = value.trim()
  if (trimmed.length === 0) return REQUIRED
  return PHONE_PATTERN.test(trimmed) ? null : PHONE_ERROR
}

export function validateNeed(value: string): string | null {
  return value === '' ? NEED_ERROR : null
}

export function validateEmail(value: string): string | null {
  const trimmed = value.trim()
  if (trimmed.length === 0) return REQUIRED
  return EMAIL_PATTERN.test(trimmed) ? null : 'Enter an address in the form name@example.com.'
}
