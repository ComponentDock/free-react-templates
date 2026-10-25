import { EMAIL_PATTERN } from '../content'

export const REQUIRED = 'This field is required.'
export const EMAIL_ERROR = 'Enter an address in the form name@example.com.'

/** The newsletter's only rule: a required, well-formed address. */
export function validateEmail(value: string): string | null {
  const trimmed = value.trim()
  if (trimmed.length === 0) return REQUIRED
  return EMAIL_PATTERN.test(trimmed) ? null : EMAIL_ERROR
}
