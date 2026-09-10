import { ArrowRight } from 'lucide-react'

export function Newsletter() {
  return (
    <section className="bg-white pb-24 pt-24">
      <div className="mx-auto max-w-2xl px-4 text-center">
        <h3 className="mb-4 text-3xl font-extralight text-gray-900 sm:text-4xl">
          Subscribe <br />
          for our <span className="font-semibold">Newsletter</span>
        </h3>
        <p className="mb-8 text-sm text-gray-500">We won't send any kind of spam</p>
        <form
          className="relative"
          onSubmit={(e) => {
            e.preventDefault()
          }}
        >
          <input
            type="email"
            placeholder="Email address"
            required
            className="w-full rounded-full bg-gray-50 py-4 pr-44 pl-6 text-sm text-gray-700 outline-none"
          />
          <button
            type="submit"
            className="absolute right-1 top-1/2 flex -translate-y-1/2 items-center gap-2 rounded-full bg-gradient-to-r from-brand-500 to-accent-300 px-6 py-3 text-xs font-medium uppercase text-white shadow transition-all hover:shadow-lg"
          >
            <span>Get Started</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </form>
      </div>
    </section>
  )
}
