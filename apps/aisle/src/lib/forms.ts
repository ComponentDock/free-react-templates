/**
 * The one shape the newsletter field accepts. Deliberately narrow: a local address with a single
 * `@` and a dotted domain — enough to catch a typo, never a reason to post anywhere.
 */
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function isEmail(value: string): boolean {
  return EMAIL.test(value)
}
