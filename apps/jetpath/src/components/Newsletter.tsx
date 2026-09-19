import { Send } from 'lucide-react'

export function Newsletter() {
  return (
    <section className="py-20 bg-jet-navy text-white">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">
          Subscribe to Our Newsletter
        </h2>
        <p className="text-white/60 mb-8 max-w-lg mx-auto">
          Get exclusive travel deals, destination guides, and trip inspiration delivered straight to
          your inbox.
        </p>
        <form
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            placeholder="Your email address"
            className="flex-1 bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-sm placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-jet-teal-light"
            aria-label="Email address"
          />
          <button
            type="submit"
            className="bg-jet-teal text-white px-6 py-3 rounded-lg font-semibold text-sm flex items-center justify-center gap-2 hover:bg-jet-teal-light transition-colors"
          >
            <Send className="w-4 h-4" />
            Subscribe
          </button>
        </form>
      </div>
    </section>
  )
}
