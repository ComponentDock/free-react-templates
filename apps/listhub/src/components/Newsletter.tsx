import { Mail } from 'lucide-react'

export function Newsletter() {
  return (
    <section className="bg-dark-bg py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2
            className="mb-4 text-3xl font-bold text-white"
            style={{ fontFamily: 'var(--font-family-heading)' }}
          >
            Let&apos;s Stay In Touch
          </h2>
          <p className="mb-8 text-gray-400">
            Join our newsletter so that we reach out to you with our best news and offers.
          </p>

          <form
            className="flex gap-2"
            aria-label="Newsletter subscription"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="relative flex-1">
              <Mail
                className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-text-muted"
                aria-hidden="true"
              />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-md border border-border-light bg-white py-3 pl-10 pr-4 text-sm text-text-dark outline-none focus:border-brand"
                aria-label="Email address"
                required
              />
            </div>
            <button
              type="submit"
              className="rounded-md bg-brand px-6 py-3 text-sm font-semibold text-white hover:bg-brand-hover"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
