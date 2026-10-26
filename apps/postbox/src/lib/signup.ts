import { useState } from 'react'

/** The reference's two validation messages, verbatim (the apostrophe is U+2019). */
export const MESSAGES = {
  missing: 'Enter your email address to subscribe.',
  invalid: 'That doesn’t look like an email address. Check for a missing @ or domain.',
} as const

/**
 * An address must carry a dot in its domain. `type="email"` alone accepts
 * `nope@nope`, which no newsletter can deliver to — this rule is the port's one
 * deliberate behavioural delta.
 */
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

/** Returns the message to show, or `null` when the address is deliverable. */
export function validateEmail(value: string): string | null {
  const address = value.trim()

  if (address === '') return MESSAGES.missing
  if (!EMAIL.test(address)) return MESSAGES.invalid

  return null
}

export interface SignupForm {
  value: string
  error: string | null
  done: boolean
  address: string
  change: (next: string) => void
  submit: () => boolean
}

/**
 * One card's signup state. Each card owns an instance, so a success on one never
 * touches the other. `submit` reports whether the form succeeded, which lets the
 * card return focus to the field it just rejected.
 */
export function useSignupForm(): SignupForm {
  const [value, setValue] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [done, setDone] = useState(false)

  const change = (next: string) => {
    setValue(next)
    if (error === null) return
    if (validateEmail(next) === null) setError(null)
  }

  const submit = () => {
    const message = validateEmail(value)

    if (message !== null) {
      setError(message)
      return false
    }

    setError(null)
    setDone(true)
    return true
  }

  return { value, error, done, address: value.trim(), change, submit }
}
