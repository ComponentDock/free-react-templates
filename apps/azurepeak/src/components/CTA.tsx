import { Mail } from 'lucide-react'

export function CTA() {
  return (
    <section className="bg-gradient-to-r from-blue-700 to-blue-900 py-20">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
          Make Your Stay Extraordinary
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-white/80">
          Subscribe to receive exclusive offers, travel inspiration, and special packages delivered
          straight to your inbox.
        </p>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
        >
          <label htmlFor="cta-email" className="sr-only">
            Email address
          </label>
          <div className="relative flex-1">
            <Mail
              className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
              aria-hidden="true"
            />
            <input
              id="cta-email"
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-full border border-white/20 bg-white/10 py-3 pl-10 pr-4 text-sm text-white placeholder:text-white/60 focus:border-white focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="rounded-full bg-amber-500 px-8 py-3 text-sm font-semibold text-blue-900 transition-colors hover:bg-amber-400"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  )
}
