import { Mail } from 'lucide-react'

export function Newsletter() {
  return (
    <section className="bg-light-grey py-12">
      <div className="mx-auto max-w-7xl px-4 text-center">
        <h2 className="mb-6 text-xl font-bold uppercase text-body-text">
          Sign Up for the <span className="text-brand">NEWSLETTER</span>
        </h2>
        <form className="mx-auto flex max-w-xl" onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 rounded-l-[40px] border border-r-0 border-gray-300 bg-white px-6 py-3 text-sm text-body-text placeholder-gray-400 focus:outline-none"
            aria-label="Email address"
          />
          <button
            type="submit"
            className="rounded-r-[40px] bg-brand px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-secondary"
          >
            <Mail className="mr-1 inline h-4 w-4" />
            Subscribe
          </button>
        </form>
      </div>
    </section>
  )
}
