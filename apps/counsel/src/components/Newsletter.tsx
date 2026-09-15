import { useState } from 'react'
import type { FormEvent } from 'react'
import { Send } from 'lucide-react'

export function Newsletter() {
  const [email, setEmail] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setEmail('')
  }

  return (
    <section id="newsletter" aria-label="Newsletter" className="relative bg-[#1d2124] py-20">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: 'url(https://picsum.photos/seed/counsel-newsletter/1920/600)' }}
      />
      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="font-display text-3xl font-semibold text-white">
          Subscribe to our Newsletter
        </h2>
        <p className="mt-4 text-gray-300">
          Stay updated with the latest legal news, tips, and firm updates delivered to your inbox.
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
            placeholder="Your Email Address"
            className="w-full min-w-0 rounded-md border border-gray-600 bg-gray-800 px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/30 sm:max-w-sm"
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-primary-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-600"
          >
            <Send className="h-4 w-4" aria-hidden="true" />
            Subscribe
          </button>
        </form>
      </div>
    </section>
  )
}
