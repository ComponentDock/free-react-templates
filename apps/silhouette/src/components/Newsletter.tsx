export function Newsletter() {
  return (
    <section className="bg-surface py-20">
      <div className="mx-auto max-w-xl px-6 text-center">
        <h2 className="mb-4 font-serif text-3xl font-bold">Stay in the Loop</h2>
        <p className="mb-8 text-gray-500">
          Subscribe for exclusive offers, new arrivals, and style tips.
        </p>
        <form className="flex gap-3" onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 rounded-full border border-gray-300 px-5 py-3 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
            aria-label="Email address"
          />
          <button
            type="submit"
            className="rounded-full bg-brand px-6 py-3 text-sm font-bold uppercase tracking-widest text-white transition-colors hover:bg-brand-dark"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  )
}
