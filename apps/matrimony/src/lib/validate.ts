const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

/**
 * The RSVP card is the only place the page owns its own validation: the form is marked `noValidate`
 * so a name-and-address check (rather than the browser's) decides whether the reply is complete, and
 * each field answers on its own so the two errors can be shown together. Keeping the checks here also
 * keeps them testable in the same environment the rest of the page is.
 */
export function isNameValid(name: string): boolean {
  return name.trim().length > 0
}

export function isEmailValid(email: string): boolean {
  return EMAIL.test(email.trim())
}
