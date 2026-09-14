import { type FormEvent, useState } from 'react'

function handleSubmit(e: FormEvent) {
  e.preventDefault()
}

export function Newsletter() {
  const [email, setEmail] = useState('')

  return (
    <section className="bg-brand py-16">
      <div className="mx-auto max-w-7xl px-4 text-center">
        <h2 className="mb-2 font-display text-2xl font-bold text-white">
          Subscribe to our newsletter
        </h2>
        <p className="mb-6 text-sm text-white/70">
          Cursus, enim a ultrices venenatis, ante magna varius.
        </p>
        <form onSubmit={handleSubmit} className="mx-auto flex max-w-md gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your e-mail address here"
            required
            aria-label="Email address"
            className="flex-1 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm text-white placeholder:text-white/50 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
          />
          <button
            type="submit"
            className="rounded-full bg-accent px-6 py-3 text-sm font-semibold uppercase text-white transition-colors hover:bg-accent/90"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  )
}
