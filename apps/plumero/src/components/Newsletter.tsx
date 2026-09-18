export function Newsletter() {
  return (
    <section className="bg-dark-purple">
      <div className="mx-auto max-w-3xl px-4 py-16 text-center text-white sm:px-6">
        <h2 className="mb-4 font-heading text-3xl font-bold sm:text-4xl">
          Get promotions &amp; updates!
        </h2>
        <p className="mb-8 text-white/80">
          Subscribe to our newsletter and never miss a sale, new arrival, or exclusive offer.
        </p>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row"
        >
          <input
            type="email"
            placeholder="Enter your email"
            aria-label="Email address"
            className="flex-1 rounded-[5px] px-4 py-3 text-page-text outline-none focus:ring-2 focus:ring-brand"
          />
          <button
            type="submit"
            className="rounded-[5px] bg-brand px-8 py-3 font-semibold text-white transition-colors hover:opacity-90"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  )
}
