import { useId, useState, type FormEvent } from 'react'
import { ArrowRight } from 'lucide-react'
import { Button } from '@free-react-templates/ui'
import {
  newsletterEmailLabel,
  newsletterInvalidEmailMessage,
  newsletterPlaceholder,
  newsletterSubscribeLabel,
  newsletterSuccessMessage,
} from '../data'

interface NewsletterFormProps {
  variant: 'sidebar' | 'footer'
}

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

/** Email form shared by the sidebar ("Newsletter") and footer widgets. The
 *  sidebar button is black (`.bbtns`), the footer button is accent (`.sub-btn`). */
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

  const inputClasses =
    'h-[40px] min-w-0 flex-1 rounded-[5px] border border-line bg-white px-4 text-sm text-ink placeholder:text-meta focus:border-accent focus:outline-none'
  const footerInputClasses =
    'h-[40px] min-w-0 flex-1 rounded-none border border-foot-input bg-foot-input px-4 text-sm text-white placeholder:text-[#999999] focus:border-accent focus:outline-none'

  return (
    <form onSubmit={handleSubmit} noValidate className="w-full">
      <div className="flex w-full gap-2">
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
          className={variant === 'sidebar' ? inputClasses : footerInputClasses}
        />
        {variant === 'sidebar' ? (
          <button
            type="submit"
            aria-label={newsletterSubscribeLabel}
            className="h-[40px] shrink-0 rounded-[5px] bg-black px-6 text-sm text-white transition-colors hover:bg-gray-900"
          >
            {newsletterSubscribeLabel}
          </button>
        ) : (
          <Button
            type="submit"
            aria-label={newsletterSubscribeLabel}
            className="h-[40px] rounded-none px-5"
          >
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Button>
        )}
      </div>
      {error ? (
        <p id={errorId} role="alert" className="mt-3 text-xs text-red-600">
          {error}
        </p>
      ) : null}
      {subscribed ? (
        <p role="status" className="mt-3 text-xs font-medium text-accent">
          {newsletterSuccessMessage}
        </p>
      ) : null}
    </form>
  )
}
