import { useRef, useState, type FormEvent } from 'react'
import { cn } from '@free-react-templates/ui'
import { Check, Mail } from 'lucide-react'
import {
  EMAIL_ID,
  ERROR_ID,
  FORM,
  HINT_ID,
  MESSAGES,
  SUCCESS,
} from '../data/site'

/**
 * An address that survives the browser's own `type="email"` check but still is
 * not deliverable — the reference catches it with a TLD test after the native
 * validity pass, so the two messages are "empty" and "incomplete", never the
 * browser's own wording.
 */
function messageFor(value: string): string {
  if (value.trim() === '') return MESSAGES.empty
  return /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i.test(value.trim()) ? '' : MESSAGES.incomplete
}

/**
 * The signup: a pill field containing a mail icon, a borderless input and the
 * coral submit, with the hint and the error slot underneath.
 *
 * The message is derived from the value on every render — never stored — so a
 * field that is edited after a failed submit shows the message its *current*
 * value earns. That is the one behavioural fix over the reference, which leaves
 * the previous message on screen. A valid submit replaces the form with a
 * `role="status"` confirmation and never moves focus into it, so the live region
 * announces once.
 */
export function SignupForm() {
  const [email, setEmail] = useState('')
  const [attempted, setAttempted] = useState(false)
  const [sent, setSent] = useState(false)
  const inputRef = useRef<HTMLInputElement | null>(null)

  const message = attempted && !sent ? messageFor(email) : ''

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const value = email.trim()
    setEmail(value)
    setAttempted(true)

    if (messageFor(value) !== '') {
      inputRef.current?.focus()
      return
    }

    setSent(true)
  }

  return (
    <div className="ep-signup">
      {sent ? (
        <div className="ep-done" role="status">
          <div className="ep-done-box">
            <span className="ep-done-icon">
              <Check size={20} strokeWidth={3} aria-hidden="true" />
            </span>
            <p className="ep-done-text">
              <strong>{SUCCESS.strong}</strong>
              {SUCCESS.rest(email)}
            </p>
          </div>
        </div>
      ) : (
        <form className={cn('ep-form', message !== '' && 'is-error')} onSubmit={handleSubmit} noValidate>
          <label className="ep-label" htmlFor={EMAIL_ID}>
            {FORM.label}
          </label>

          <div className="ep-field">
            <Mail className="ep-field-icon" size={20} strokeWidth={1.8} aria-hidden="true" />
            <input
              ref={inputRef}
              id={EMAIL_ID}
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder={FORM.placeholder}
              className="ep-input"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              aria-invalid={message !== '' ? true : undefined}
              aria-describedby={`${HINT_ID} ${ERROR_ID}`}
            />
            <button className="ep-submit" type="submit">
              {FORM.submit}
            </button>
          </div>

          <p className="ep-hint" id={HINT_ID}>
            {FORM.hint}
          </p>
          {/* Always in the DOM so `aria-describedby` never points at nothing;
              `:empty` keeps the zero-message state at zero height. */}
          <p className="ep-error" id={ERROR_ID} role="alert">
            {message}
          </p>
        </form>
      )}
    </div>
  )
}
