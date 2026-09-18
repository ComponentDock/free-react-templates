import { useState } from 'react'
import type { FormEvent } from 'react'
import { Send } from 'lucide-react'

export function Subscribe() {
  const [email, setEmail] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setEmail('')
  }

  return (
    <section aria-label="Newsletter" className="bg-cream py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="rounded-lg bg-white p-8 shadow-sm sm:p-12">
          <div className="flex flex-col gap-8 md:flex-row md:items-center">
            <div className="flex-1">
              <h2 className="font-display text-2xl font-bold text-ink">
                Subscribe to our newsletter
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-smoke">
                Far far away, behind the word mountains, far from the countries Vokalia and
                Consonantia, there live the blind texts.
              </p>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-1 gap-2">
              <label htmlFor="subscribe-email" className="sr-only">
                Your E-mail
              </label>
              <input
                id="subscribe-email"
                type="email"
                required
                placeholder="Your E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="min-w-0 flex-1 rounded-full border border-gray-300 px-5 py-3 text-sm text-ink placeholder:text-smoke focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-400/30"
              />
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full bg-primary-400 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-500"
              >
                <Send className="h-4 w-4" aria-hidden="true" />
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
