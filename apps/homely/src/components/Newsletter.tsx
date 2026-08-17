import { useState, type FormEvent } from 'react'
import { Button } from '@free-react-templates/ui'
import { Send } from 'lucide-react'
import { z } from 'zod'
import { NEWSLETTER } from '../data'

/* Footer newsletter: email input with the 2px brand border plus subscribe
   button; zod-validated, swapping to a status line on success. */
export function Newsletter() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [done, setDone] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const result = z.string().trim().email(NEWSLETTER.error).safeParse(email)
    if (!result.success) {
      setError(NEWSLETTER.error)
      return
    }
    setError(null)
    setDone(true)
  }

  if (done) {
    return (
      <p role="status" className="text-sm leading-[1.6] text-body">
        {NEWSLETTER.success}
      </p>
    )
  }

  return (
    <div>
      <form onSubmit={handleSubmit} noValidate className="relative">
        <div className="flex">
          <label htmlFor="newsletter-email" className="sr-only">
            {NEWSLETTER.label}
          </label>
          <input
            id="newsletter-email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder={NEWSLETTER.placeholder}
            className="h-[52px] w-full border-2 border-brand bg-transparent px-4 text-ink outline-none transition-colors placeholder:text-muted focus:bg-white"
          />
          <Button
            type="submit"
            className="h-[52px] shrink-0 rounded-none bg-brand px-6 text-sm font-semibold uppercase tracking-wide text-white hover:bg-brand-deep"
          >
            <Send aria-hidden="true" className="size-4" />
            {NEWSLETTER.submit}
          </Button>
        </div>
      </form>
      {error && (
        <p role="alert" className="mt-2 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  )
}
