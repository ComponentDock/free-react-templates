/**
 * The e-mail shape the design's own field check accepts: a local part, an `@`,
 * a domain and a two-or-more-character TLD, with no whitespace anywhere.
 */
export const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

/** The single line the field's bubble carries when the value is not accepted. */
export const EMAIL_MESSAGE = 'Please enter a valid email address'

/**
 * Check a raw field value the way the design's own validator does: the value is
 * trimmed first, so surrounding spaces never fail a good address, and the same
 * message covers both an empty field and a malformed one. Returns `null` when
 * the value is accepted.
 */
export function emailError(value: string): string | null {
  const trimmed = value.trim()

  return trimmed.length > 0 && EMAIL_PATTERN.test(trimmed) ? null : EMAIL_MESSAGE
}
