import { useState } from 'react'

export function Signup() {
  const [email, setEmail] = useState('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <section className="pattern-bg py-16">
      <div className="mx-auto max-w-xl px-6 text-center">
        <h2 className="text-3xl font-bold text-white">Sign Up for Updates</h2>
        <p className="mt-3 text-sm text-white/70">
          Subscribe to our newsletter for the latest news, events, and special offers.
        </p>
        <form onSubmit={handleSubmit} className="mt-8 flex gap-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email Address"
            className="flex-1 rounded-[10px] border border-border-light bg-white px-4 py-3 text-sm text-text-dark placeholder:text-text-placeholder"
            aria-label="Email address"
          />
          <button
            type="submit"
            className="rounded-[10px] bg-brand px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-surface-darker"
          >
            Sign-up
          </button>
        </form>
      </div>
    </section>
  )
}
