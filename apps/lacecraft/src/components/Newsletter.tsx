import { Mail } from 'lucide-react'

export function Newsletter() {
  return (
    <section className="relative overflow-hidden bg-primary-600 py-16">
      {/* Pattern overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6">
        <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
          Ready to Step Up Your Game?
        </h2>
        <p className="mt-3 text-primary-100">
          Join our newsletter and get 15% off your first order.
        </p>

        <form className="mx-auto mt-6 flex max-w-md gap-2" onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            placeholder="Enter your email"
            className="flex-1 rounded-full bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
          />
          <button
            type="submit"
            className="flex items-center gap-2 rounded-full bg-gray-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-800"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            Get 15% Off
          </button>
        </form>

        <p className="mt-3 text-xs text-primary-200">No spam, unsubscribe anytime.</p>

        <div className="mt-8 flex items-center justify-center gap-4">
          <a
            href="#app-store"
            className="inline-flex items-center gap-2 rounded-lg bg-black/20 px-4 py-2 text-sm font-medium text-white transition hover:bg-black/30"
          >
            <span className="text-lg" aria-hidden="true">
              🍎
            </span>
            App Store
          </a>
          <a
            href="#google-play"
            className="inline-flex items-center gap-2 rounded-lg bg-black/20 px-4 py-2 text-sm font-medium text-white transition hover:bg-black/30"
          >
            <span className="text-lg" aria-hidden="true">
              ▶️
            </span>
            Google Play
          </a>
        </div>
      </div>
    </section>
  )
}
