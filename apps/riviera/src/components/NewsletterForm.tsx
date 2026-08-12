import { useState, type FormEvent } from 'react'
import { Send } from 'lucide-react'
import { Button } from '@free-react-templates/ui'
import { fieldErrors, newsletterSchema } from '../lib/forms'

/* NewsletterForm — the footer newsletter: a dark email input with a peach
   Subscribe button docked to its right edge. Zod-validated; a valid
   address shows a confirmation and resets the field. */
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
        placeholder="Your Email Here"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        className="h-[50px] w-full bg-input pl-[25px] pr-[120px] text-sm text-white outline-none placeholder:italic placeholder:text-white/70"
      />
      <Button
        type="submit"
        className="absolute right-0 top-0 h-full rounded-none bg-brand px-[25px] text-sm font-normal text-white hover:opacity-90"
      >
        <Send aria-hidden="true" className="h-4 w-4" />
        Subscribe
      </Button>
      {error && (
        <p role="alert" className="mt-2 text-xs font-medium text-red-300">
          {error}
        </p>
      )}
      {subscribed && (
        <p role="status" className="mt-2 text-xs font-medium text-brand">
          Thank you — you have been subscribed.
        </p>
      )}
    </form>
  )
}
