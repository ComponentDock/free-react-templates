import { useState, type FormEvent } from 'react'
import { Button } from '@free-react-templates/ui'
import { fieldErrors, newsletterSchema } from '../lib/forms'

/* NewsletterForm — the footer newsletter: a dark email input with the
   gradient Subscribe button docked to its right edge. Zod-validated; a
   valid address shows a confirmation and resets the field. */
export function NewsletterForm() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState<string | undefined>()
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const result = newsletterSchema.safeParse({ email })
    if (!result.success) {
      setError(fieldErrors(result).email)
      setSubscribed(false)
      return
    }
    setError(undefined)
    setSubscribed(true)
    setEmail('')
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="relative">
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <input
        id="newsletter-email"
        type="email"
        placeholder="E-mail"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        className="h-[40px] w-full bg-input pl-[15px] pr-[110px] text-xs text-muted outline-none placeholder:text-muted"
      />
      <Button
        type="submit"
        className="absolute right-0 top-0 h-[40px] rounded-none bg-gradient-to-r from-brand-purple to-brand-green px-[15px] text-[13px] font-semibold uppercase tracking-wide text-white hover:opacity-90"
      >
        Subscribe
      </Button>
      {error && (
        <p role="alert" className="mt-2 text-xs font-medium text-red-400">
          {error}
        </p>
      )}
      {subscribed && (
        <p role="status" className="mt-2 text-xs font-medium text-brand-green">
          Thank you — you have been subscribed.
        </p>
      )}
    </form>
  )
}
