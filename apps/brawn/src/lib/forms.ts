/** One email rule for every form on the page: one @, a dot, no spaces. */
const EMAIL = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i

export function isEmail(value: string): boolean {
  return EMAIL.test(value.trim())
}
