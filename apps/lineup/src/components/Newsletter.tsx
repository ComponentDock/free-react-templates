import { useState } from 'react'

function handleSubmit(e: React.FormEvent) {
  e.preventDefault()
}

export function Newsletter() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 text-center">
        <h2 className="mb-4 text-3xl font-bold text-[var(--color-heading)] md:text-4xl">
          Subscribe to our newsletter to get the latest trends &amp; news
        </h2>
        <p className="mb-8 text-lg text-[var(--color-muted)]">Join our database NOW!</p>

        <form onSubmit={handleSubmit} className="mx-auto flex max-w-3xl flex-col gap-4 sm:flex-row">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="flex-1 rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-[var(--color-primary-start)] focus:outline-none"
            aria-label="Name"
          />
          <input
            type="email"
            placeholder="Your e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-[2] rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-[var(--color-primary-start)] focus:outline-none"
            aria-label="Email"
          />
          <button
            type="submit"
            className="rounded-full bg-gradient-to-r from-[var(--color-primary-start)] to-[var(--color-primary-end)] px-8 py-3 text-sm font-bold text-white transition-opacity hover:opacity-90"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  )
}
