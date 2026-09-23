import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

export function Newsletter() {
  const [email, setEmail] = useState('')

  return (
    <section className="bg-mist py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <div>
            <h3 className="mb-1 text-xl font-medium text-ink">Subscribe for our Newsletter</h3>
            <span className="text-sm font-light text-smoke">
              Can you imagine what we will be downloading in another decade?
            </span>
          </div>
          <form onSubmit={(e) => e.preventDefault()} className="flex w-full max-w-md gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 rounded-full border border-gray-300 bg-white px-4 py-2 text-sm text-ink outline-none transition-colors focus:border-primary-400 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
              aria-label="Email address"
            />
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary-400 to-teal-400 px-5 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90"
            >
              <span>Get Started</span>
              <ArrowRight size={14} />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
