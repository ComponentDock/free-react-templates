import { Mail } from 'lucide-react'

export function Newsletter() {
  return (
    <section className="py-16 bg-page border-t border-line">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-ink mb-3">Subscribe to Our Newsletter</h2>
        <p className="text-muted text-sm mb-8">Stay updated with the latest listings and offers</p>

        <form
          className="flex flex-col sm:flex-row items-stretch gap-3 max-w-lg mx-auto"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="flex items-center gap-2 flex-1 bg-white border border-line rounded-lg px-4 py-3">
            <Mail className="w-5 h-5 text-muted" />
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 text-ink text-sm outline-none bg-transparent"
              aria-label="Email address"
            />
          </div>
          <button
            type="submit"
            className="bg-primary hover:bg-primary-hover text-white font-semibold px-6 py-3 rounded-lg text-sm transition-colors whitespace-nowrap"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  )
}
