import { Send } from 'lucide-react'

export function Newsletter() {
  return (
    <section className="bg-ice py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-4">
          <Send className="h-8 w-8 text-primary-400" />
          <div>
            <h2 className="font-display text-lg font-bold text-ink">Sign up for Newsletter</h2>
            <p className="text-sm text-smoke">...and receive %20 coupon for first shopping.</p>
          </div>
        </div>
        <form className="flex w-full max-w-md" onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            placeholder="Enter your email address"
            className="flex-1 rounded-l border border-r-0 border-gray-300 px-4 py-3 text-sm focus:border-primary-400 focus:outline-none"
          />
          <button
            type="submit"
            className="rounded-r bg-primary-400 px-6 py-3 font-display text-sm font-semibold text-white hover:bg-primary-500 transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  )
}
