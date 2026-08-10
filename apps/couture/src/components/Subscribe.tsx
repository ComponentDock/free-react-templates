import { useState, type FormEvent } from 'react'
import { cn } from '@free-react-templates/ui'

export function Subscribe() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="bg-black py-16">
      <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
        <h2 className="font-display text-4xl font-bold uppercase tracking-wide text-white">
          Subscribe to our Newsletter
        </h2>
        {submitted ? (
          <p role="status" className="mt-8 text-lg text-brand">
            Thanks for subscribing!
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-8 flex flex-col items-center gap-4 sm:flex-row"
          >
            <label htmlFor="subscribe-email" className="sr-only">
              Email address
            </label>
            <input
              id="subscribe-email"
              type="email"
              required
              placeholder="Enter email address"
              className={cn(
                'h-12 w-full flex-1 border border-white/30 bg-transparent px-4 text-sm text-white',
                'placeholder:text-white/50 focus:border-brand focus:outline-none',
              )}
            />
            <button
              type="submit"
              className={cn(
                'h-12 bg-brand px-6 font-display text-sm font-bold uppercase tracking-widest',
                'text-black transition-colors hover:bg-brand-deep',
              )}
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
