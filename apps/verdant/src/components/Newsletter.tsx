export function Newsletter() {
  return (
    <section
      className="relative bg-cover bg-center py-16"
      style={{
        backgroundImage: `url('https://picsum.photos/seed/verdant-newsletter/1600/400')`,
      }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-4 md:flex-row">
        <div>
          <h2 className="mb-2 text-3xl font-bold text-white">Join the Newsletter</h2>
          <p className="text-gray-200">
            Subscribe to our newsletter and get 10% off your first purchase
          </p>
        </div>
        <form onSubmit={(e) => e.preventDefault()} className="flex w-full gap-2 md:w-auto">
          <input
            type="email"
            placeholder="Enter your email"
            aria-label="Email address"
            className="w-full rounded bg-white px-4 py-3 text-ink md:w-72"
          />
          <button
            type="submit"
            className="shrink-0 rounded bg-brand px-6 py-3 font-semibold text-white transition-colors hover:bg-brand-dark"
          >
            SUBSCRIBE
          </button>
        </form>
      </div>
    </section>
  )
}
