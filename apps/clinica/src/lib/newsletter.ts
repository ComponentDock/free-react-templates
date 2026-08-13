const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

/** Pure newsletter validation: the email must be present and well-formed.
 *  Returns an error message when invalid, or null when valid. */
export function validateNewsletter(email: string): string | null {
  const trimmed = email.trim()
  if (trimmed === '') {
    return 'Email address is required'
  }
  if (!EMAIL_PATTERN.test(trimmed)) {
    return 'Please enter a valid email address'
  }
  return null
}
