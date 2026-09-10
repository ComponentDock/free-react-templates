import { type FormEvent, useState } from 'react'
import { Mail } from 'lucide-react'

export function Newsletter() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (email.trim()) {
      setSubscribed(true)
    }
  }

  return (
    <section className="bg-ink py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white">Weekly Newsletter</h2>
            <p className="mt-2 text-sm text-white/70">
              There are many variations of passages of Lorem ipsum available.
            </p>
          </div>

          <div className="w-full max-w-md">
            {subscribed ? (
              <p className="text-center text-sm font-bold text-brand">Thank you for subscribing!</p>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex overflow-hidden rounded border border-white/20"
              >
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <div className="flex items-center gap-2 px-3">
                  <Mail className="h-5 w-5 text-white/50" aria-hidden="true" />
                  <input
                    id="newsletter-email"
                    type="email"
                    placeholder="Enter Your Mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-transparent py-3 text-sm text-white outline-none placeholder:text-white/40"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="bg-brand px-6 py-3 text-sm font-bold text-white uppercase tracking-wide transition-colors hover:bg-brand-dark"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
