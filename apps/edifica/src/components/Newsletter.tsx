import { useState } from 'react'

export function Newsletter() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setEmail('')
  }

  return (
    <section className="bg-primary-400 py-12" aria-labelledby="newsletter-heading">
      <div className="mx-auto max-w-4xl px-4">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <h2 id="newsletter-heading" className="text-xl font-bold text-white md:text-2xl">
            Subscribe to our Newsletter
          </h2>
          <form onSubmit={handleSubmit} className="flex w-full gap-2 md:w-auto">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email address"
              className="flex-1 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-white/50 md:w-64"
            />
            <button
              type="submit"
              className="rounded-md bg-navy px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-navy/90"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
