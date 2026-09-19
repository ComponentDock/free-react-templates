import { useState, type FormEvent } from 'react'

function handleSubmit(e: FormEvent) {
  e.preventDefault()
}

export function Newsletter() {
  const [email, setEmail] = useState('')

  return (
    <section id="contact" className="bg-navy py-16 text-white">
      <div className="mx-auto max-w-[1300px] px-5 text-center lg:px-10">
        <h2 className="mb-3 text-3xl font-bold uppercase">Join our newsletter</h2>
        <p className="mb-8 text-sm text-white/70">
          Be the first to know about new arrivals, sales and design inspiration.
        </p>
        <form onSubmit={handleSubmit} className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row">
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            required
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-brand"
          />
          <button
            type="submit"
            className="bg-brand px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white hover:bg-brand/90"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  )
}
