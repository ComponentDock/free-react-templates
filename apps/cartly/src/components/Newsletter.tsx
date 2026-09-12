import { Send } from 'lucide-react'

export function Newsletter() {
  return (
    <section className="bg-neutral-100">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div>
            <h3 className="font-heading text-xl font-bold uppercase text-neutral-800">
              Subscribe to Our Newsletter
            </h3>
            <p className="mt-1 text-sm text-neutral-500">
              Get weekly updates on new arrivals and exclusive offers.
            </p>
          </div>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex w-full max-w-md"
            aria-label="Newsletter signup"
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="Your email address"
              className="flex-1 border border-neutral-300 bg-white px-4 py-2.5 text-sm text-neutral-700 placeholder:text-neutral-400 focus:border-lime-400 focus:outline-none"
            />
            <button
              type="submit"
              aria-label="Subscribe"
              className="flex items-center justify-center bg-lime-400 px-4 text-white transition-colors hover:bg-lime-500"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
