import { Mail } from 'lucide-react'

export function Newsletter() {
  return (
    <section className="relative py-20">
      <img
        src="https://picsum.photos/seed/talentgate-newsletter/1920/400"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-dark-overlay/85" />
      <div className="relative z-10 mx-auto max-w-2xl px-4 text-center">
        <h2 className="mb-4 text-3xl font-bold text-white">Subscribe to our Newsletter</h2>
        <p className="mb-8 text-gray-300">
          Get the latest job opportunities and career tips delivered to your inbox.
        </p>
        <form className="flex flex-col gap-3 sm:flex-row" onSubmit={(e) => e.preventDefault()}>
          <div className="relative flex-1">
            <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded bg-white py-3 pl-11 pr-4 text-sm text-gray-700 outline-none placeholder:text-gray-400"
              aria-label="Email address"
            />
          </div>
          <button
            type="submit"
            className="rounded bg-brand-green px-8 py-3 text-sm font-medium text-white transition hover:bg-brand-green/90"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  )
}
