import { Star } from './Star'

export function Newsletter() {
  return (
    <section className="relative bg-gray-900 py-20" aria-labelledby="newsletter-heading">
      <img
        src="https://picsum.photos/seed/luxstay-news/1920/400"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-30"
      />
      <div className="relative z-10 mx-auto max-w-7xl px-4 text-center">
        <div className="mb-4 flex justify-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} filled />
          ))}
        </div>
        <h2 id="newsletter-heading" className="mb-3 font-heading text-3xl text-white">
          Sign Up for a Newsletter
        </h2>
        <p className="mx-auto mb-8 max-w-md text-sm text-gray-300">
          Get exclusive offers and updates delivered straight to your inbox
        </p>
        <form
          className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            placeholder="Your email address"
            aria-label="Email address"
            className="flex-1 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm text-white placeholder-gray-400 focus:border-brand-blue focus:outline-none"
          />
          <button
            type="submit"
            className="rounded-full bg-brand-blue px-8 py-3 text-sm font-medium uppercase tracking-wider text-white hover:bg-blue-600"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  )
}
