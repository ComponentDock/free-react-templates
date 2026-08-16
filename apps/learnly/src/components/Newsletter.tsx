import { FormEvent, useState } from 'react'
import { Send } from 'lucide-react'
import { newsletter } from '../data'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function Newsletter() {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const email = String(data.get('email') ?? '').trim()
    setStatus(EMAIL_PATTERN.test(email) ? 'success' : 'error')
  }

  return (
    <section id="contact" aria-label="Newsletter" className="bg-brand-deep py-20 text-white">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-3xl font-medium leading-snug lg:text-4xl">{newsletter.heading}</h2>
        <p className="mt-4 leading-relaxed text-white/85">{newsletter.copy}</p>

        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-8 flex max-w-xl items-center gap-3"
          noValidate
        >
          <label htmlFor="newsletter-email" className="sr-only">
            {newsletter.placeholder}
          </label>
          <input
            id="newsletter-email"
            name="email"
            type="text"
            placeholder={newsletter.placeholder}
            className="h-12 flex-1 rounded border border-white/30 bg-white px-5 text-ink placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-white"
          />
          <button
            type="submit"
            aria-label={newsletter.submitLabel}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded bg-white text-brand transition-colors hover:bg-ink hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <Send className="h-5 w-5" aria-hidden="true" />
          </button>
        </form>

        {status === 'error' && (
          <p role="alert" className="mt-4 font-medium text-white">
            {newsletter.errorMessage}
          </p>
        )}
        {status === 'success' && (
          <p role="status" className="mt-4 font-medium text-white">
            {newsletter.successMessage}
          </p>
        )}
      </div>
    </section>
  )
}
