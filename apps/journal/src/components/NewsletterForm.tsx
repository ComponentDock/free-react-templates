import { useId, useState, type FormEvent } from 'react'
import { Button } from '@free-react-templates/ui'
import { cn } from '@free-react-templates/ui'
import {
  newsletterEmailLabel,
  newsletterInvalidEmailMessage,
  newsletterPlaceholder,
  newsletterSubmitLabel,
  newsletterSuccessMessage,
} from '../data'

interface NewsletterFormProps {
  variant: 'sidebar' | 'modal'
}

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

/** Email form shared by the sidebar newsletter widget and the Subscribe
 *  modal: underline-border input, radius-0 `original-btn` submit, inline
 *  validation, and a success state that replaces the form. */
export function NewsletterForm({ variant }: NewsletterFormProps) {
  const [email, setEmail] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [subscribed, setSubscribed] = useState(false)
  const inputId = useId()
  const errorId = `${inputId}-error`

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!isValidEmail(email)) {
      setError(newsletterInvalidEmailMessage)
      setSubscribed(false)
      return
    }
    setError(null)
    setSubscribed(true)
    setEmail('')
  }

  if (subscribed) {
    return (
      <p role="status" className="text-sm font-medium text-accent">
        {newsletterSuccessMessage}
      </p>
    )
  }

  const inputClasses = variant === 'sidebar' ? 'h-[40px] text-[13px]' : 'h-[60px] text-[14px]'

  return (
    <form onSubmit={handleSubmit} noValidate className="w-full">
      <div className="flex flex-col gap-4 sm:flex-row">
        <label htmlFor={inputId} className="sr-only">
          {newsletterEmailLabel}
        </label>
        <input
          id={inputId}
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder={newsletterPlaceholder}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? errorId : undefined}
          className={cn(
            'w-full min-w-0 flex-1 border border-input bg-white px-[25px] italic text-ink placeholder:text-search focus:border-ink focus:outline-none',
            inputClasses,
          )}
        />
        <Button
          type="submit"
          className="h-[60px] min-w-[175px] shrink-0 rounded-none border border-line bg-white text-[14px] font-semibold uppercase tracking-[3px] text-ink shadow-[0_0_30px_rgba(0,0,0,0.1)] hover:border-accent hover:bg-accent hover:text-white"
        >
          {newsletterSubmitLabel}
        </Button>
      </div>
      {error ? (
        <p id={errorId} role="alert" className="mt-3 text-xs text-red-600">
          {error}
        </p>
      ) : null}
    </form>
  )
}
