const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

/**
 * The reservation card is the only place the page owns its own validation: the form is marked
 * `noValidate` so a name-and-address check (rather than the browser's) decides whether the reply
 * is complete — which also keeps the check testable in the same environment the rest of the page
 * is.
 */
export function isValidRsvp(name: string, email: string): boolean {
  return name.trim().length > 0 && EMAIL.test(email.trim())
}
