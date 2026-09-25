import { type FormEvent, useState } from 'react'
import { Send } from 'lucide-react'

export function Newsletter() {
  const [email, setEmail] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setEmail('')
  }

  return (
    <section
      aria-label="Newsletter"
      className="bg-gradient-to-r from-primary-400 to-teal-400 py-16"
    >
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="text-3xl font-bold text-white">Subscribe to Our Newsletter</h2>
        <p className="mt-4 text-base leading-relaxed text-white/85">
          Stay updated with the latest health tips, clinic news, and medical insights delivered
          straight to your inbox.
        </p>
        <form
          onSubmit={handleSubmit}
          className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center"
        >
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Enter your email address"
            className="w-full min-w-0 rounded-md border border-white/30 bg-white/20 px-5 py-3 text-sm text-white placeholder:text-white/70 focus:border-white focus:outline-none focus:ring-2 focus:ring-white/40 sm:max-w-md"
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-purple-500 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-purple-600"
          >
            <Send className="h-4 w-4" aria-hidden="true" />
            Subscribe
          </button>
        </form>
      </div>
    </section>
  )
}
