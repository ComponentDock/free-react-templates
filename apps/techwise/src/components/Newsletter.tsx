import { useState, type FormEvent } from 'react'
import { Send } from 'lucide-react'

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
    <section className="relative bg-dark-bg py-20 lg:py-[120px]">
      <div className="absolute inset-0">
        <img
          src="https://picsum.photos/seed/techwise-newsletter/1600/500"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-darker-bg/80" />
      </div>

      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">Subscribe to our Newsletter</h2>
        <p className="mt-4 text-gray-300">
          Stay updated with our latest news, offers, and insights delivered straight to your inbox.
        </p>

        {subscribed ? (
          <p className="mt-8 rounded bg-brand/20 px-6 py-4 text-brand">
            Thank you for subscribing! We&apos;ll be in touch.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            noValidate
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center"
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="rounded bg-white/10 px-6 py-3 text-white placeholder:text-gray-400 focus:bg-white/20 focus:outline-none"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded bg-brand px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-brand/80"
            >
              <Send className="h-4 w-4" aria-hidden="true" />
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
