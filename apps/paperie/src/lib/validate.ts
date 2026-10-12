const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

/**
 * The guest book is the only place the page owns its own validation: the form is marked
 * `noValidate` so this name-and-address check (rather than the browser's) decides whether the reply
 * is complete — which also keeps the check testable in the same environment as the rest of the page.
 */
export function isValidReply(name: string, email: string): boolean {
  return name.trim().length > 0 && EMAIL.test(email.trim())
}
