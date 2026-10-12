/**
 * The email shape the design itself validates with: a local part, a domain, and a 1–63 letter top
 * level — the pattern the reservation form's own markup carries.
 */
const EMAIL = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$/

/**
 * The reservation card is the only place the page owns its own validation: the form is marked
 * `noValidate`, so these three checks (rather than the browser's native message) decide whether the
 * reservation is complete, and each field answers on its own so two errors can be shown together.
 */
export function isNameValid(name: string): boolean {
  return name.trim().length > 0
}

export function isEmailValid(email: string): boolean {
  return EMAIL.test(email.trim())
}

export function isMessageValid(message: string): boolean {
  return message.trim().length > 0
}

/**
 * Puts the visitor in front of the first field they need to fix — the behaviour the design inherits
 * from the browser's own validation, which it opts out of the moment the form is handled here.
 */
export function focusField(id: string): void {
  const field = document.getElementById(id)

  if (field instanceof HTMLElement) {
    field.focus()
  }
}
