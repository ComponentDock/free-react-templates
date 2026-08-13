import { useState, type FormEvent } from 'react'
import { Button } from '@free-react-templates/ui'
import { newsletter } from '../data'

/** Sage-green newsletter band: white headline on the left, email input and
 *  Subscribe button on the right. */
export function Newsletter() {
  const [email, setEmail] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setEmail('')
  }

  return (
    <section aria-label="Newsletter" className="bg-brand">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-14 lg:flex-row">
        <h2 className="text-center text-[28px] font-semibold text-white lg:text-left">
          {newsletter.headline}
        </h2>
        <form
          onSubmit={handleSubmit}
          className="flex w-full max-w-md flex-col gap-3 sm:flex-row"
          aria-label="Newsletter form"
        >
          <label htmlFor="gavel-newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="gavel-newsletter-email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder={newsletter.placeholder}
            className="w-full rounded border border-white/40 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-ink focus:outline-none"
          />
          <Button type="submit" className="shrink-0 rounded bg-ink text-white hover:bg-ink/90">
            {newsletter.submitLabel}
          </Button>
        </form>
      </div>
    </section>
  )
}
