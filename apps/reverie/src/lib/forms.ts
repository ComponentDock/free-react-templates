import {
  EMAIL_ERROR,
  EMAIL_PATTERN,
  GUESTS_ERROR,
  NAME_ERROR,
  SERVICE_ERROR,
  type FieldName,
} from './site'

export type RequestValues = Record<FieldName, string>
export type FieldErrors = Partial<Record<FieldName, string>>

/** The one shape the newsletter field accepts — a local part, a domain and a dot. */
export function isEmail(value: string): boolean {
  return EMAIL_PATTERN.test(value.trim())
}

/**
 * The request card is the page's only real form. It is marked `noValidate`, so these four checks —
 * rather than the browser's own message — decide whether the enquiry is complete, and each field
 * answers on its own so that four errors can be shown at once.
 */
export function validateRequest(values: RequestValues): FieldErrors {
  const found: FieldErrors = {}

  if (values.name.trim() === '') {
    found.name = NAME_ERROR
  }

  if (!isEmail(values.email)) {
    found.email = EMAIL_ERROR
  }

  if (values.service === '') {
    found.service = SERVICE_ERROR
  }

  if (values.guests === '') {
    found.guests = GUESTS_ERROR
  }

  return found
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
