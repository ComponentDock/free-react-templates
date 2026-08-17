import { useState, type FormEvent } from 'react'
import { Button } from '@free-react-templates/ui'
import { z } from 'zod'
import { FOOTER } from '../data'

/* Footer newsletter: transparent 52px input with a subtle border and a
   yellow subscribe button; zod-validated with an inline success state. */
export function Newsletter() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [done, setDone] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const result = z.string().trim().email(FOOTER.newsletterError).safeParse(email)
    if (!result.success) {
      setError(FOOTER.newsletterError)
      return
    }
    setError(null)
    setDone(true)
  }

  if (done) {
    return (
      <p role="status" className="text-sm leading-[1.6] text-brand">
        {FOOTER.newsletterSuccess}
      </p>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="relative">
      <label htmlFor="newsletter-email" className="sr-only">
        {FOOTER.newsletterLabel}
      </label>
      <div className="flex">
        <input
          id="newsletter-email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder={FOOTER.newsletterPlaceholder}
          className="h-[52px] w-full border border-white/50 bg-transparent px-5 text-white outline-none transition-colors placeholder:text-mist focus:border-brand"
        />
        <Button
          type="submit"
          className="h-[52px] shrink-0 rounded-none bg-brand px-7 font-display text-sm font-medium uppercase tracking-wide text-white transition-colors hover:bg-ember"
        >
          {FOOTER.subscribeLabel}
        </Button>
      </div>
      {error && (
        <p role="alert" className="mt-2 text-sm text-blush">
          {error}
        </p>
      )}
    </form>
  )
}
