import { ArrowRight } from 'lucide-react'

export function Newsletter() {
  return (
    <section className="bg-paper py-24">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-3xl font-light text-ink">
          Subscribe for our <span className="font-semibold text-accent">Newsletter</span>
        </h3>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="mx-auto mt-8 flex max-w-lg items-center gap-2"
          aria-label="Newsletter subscription"
        >
          <input
            type="email"
            placeholder="Your Email address"
            className="flex-1 rounded-full border border-gray-300 bg-white px-5 py-2.5 text-sm text-ink placeholder-mist outline-none focus:border-primary-500"
            required
          />
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary-800 to-primary-400 px-6 py-2.5 text-sm font-medium text-white transition hover:opacity-90"
          >
            Get Started
            <ArrowRight size={14} />
          </button>
        </form>
        <p className="mt-4 text-xs text-mist">We won&apos;t send any types of spam, Guaranteed</p>
      </div>
    </section>
  )
}
