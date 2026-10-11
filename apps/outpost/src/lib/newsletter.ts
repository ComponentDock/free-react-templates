/* Newsletter email validation for the subscribe band and the footer form.
   Pure so both forms share one rule and every branch stays unit-testable. */

export function validateEmail(value: string): string | null {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())
    ? null
    : 'Please enter a valid email address'
}
