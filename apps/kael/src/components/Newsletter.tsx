import { useState, type FormEvent } from 'react'
import { Button } from '@free-react-templates/ui'

export function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (email.trim()) {
      setSubmitted(true)
    }
  }

  return (
    <section className="bg-gradient-to-r from-primary-500 to-accent-400 py-20">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="mb-4 font-display text-2xl font-bold uppercase text-white md:text-3xl">
          Get Update From Anywhere
        </h2>
        <p className="mb-8 text-sm text-white/80">
          Subscribe to receive the latest news, tips, and updates directly to your inbox.
        </p>

        {submitted ? (
          <p className="font-display text-lg font-medium text-white">Thank you for subscribing!</p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              required
              className="w-full max-w-sm rounded-lg border border-white/30 bg-white/20 px-5 py-3 text-sm text-white placeholder-white/60 backdrop-blur-sm focus:border-white focus:outline-none focus:ring-2 focus:ring-white/50"
              aria-label="Email address"
            />
            <Button
              type="submit"
              className="w-full bg-white text-primary-500 hover:bg-gray-100 sm:w-auto"
            >
              Get Started
            </Button>
          </form>
        )}
      </div>
    </section>
  )
}
