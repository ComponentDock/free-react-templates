import { useCallback, useState, type FormEvent } from 'react'
import { emailError } from '../lib/validation'

export interface EmailValidation {
  /** The field's current value. */
  value: string
  /** The bubble line to show, or `null` while the field is accepted. */
  error: string | null
  /** Record a keystroke — never validates, matching the design's submit-only check. */
  change: (value: string) => void
  /** Clear the error state as soon as the field is focused again. */
  focus: () => void
  /** Validate on submit, block the navigation and reveal the bubble on a miss. */
  submit: (event: FormEvent<HTMLFormElement>) => void
}

/**
 * The design's e-mail behaviour in one place: it validates only on submit,
 * always prevents the navigation, keeps no success state and clears the error
 * the moment the field is focused.
 */
export function useEmailValidation(): EmailValidation {
  const [value, setValue] = useState('')
  const [error, setError] = useState<string | null>(null)

  const change = useCallback((next: string) => {
    setValue(next)
  }, [])

  const focus = useCallback(() => {
    setError(null)
  }, [])

  const submit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      setError(emailError(value))
    },
    [value],
  )

  return { value, error, change, focus, submit }
}
