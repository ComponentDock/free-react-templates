import { Mail } from 'lucide-react'
import { Button } from '@free-react-templates/ui'

export function Newsletter() {
  return (
    <section className="relative overflow-hidden bg-navy py-20">
      {/* Background image with overlay */}
      <img
        src="https://picsum.photos/seed/lectio-newsletter/1920/600"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-15"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-navy/90" />

      <div className="relative z-10 mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="mb-4 text-3xl font-bold text-white">Stay Updated</h2>
        <p className="mb-8 text-white/70">
          Subscribe to our newsletter to receive the latest updates on courses, events, and
          educational resources.
        </p>

        <form className="flex flex-col gap-3 sm:flex-row" onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <div className="relative flex-1">
            <Mail
              className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-mist"
              aria-hidden="true"
            />
            <input
              id="newsletter-email"
              type="email"
              placeholder="Enter your email address"
              className="w-full rounded-full border border-white/20 bg-white/10 py-3 pl-12 pr-4 text-sm text-white placeholder-white/50 focus:border-brand focus:ring-2 focus:ring-brand/30 focus:outline-none"
            />
          </div>
          <Button
            type="submit"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
          >
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  )
}
