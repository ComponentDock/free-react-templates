export function Newsletter() {
  return (
    <section className="bg-brand py-16 md:py-20" data-testid="newsletter">
      <div className="container mx-auto px-4 text-center">
        <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
          Sign up for discount up to 55% OFF
        </h2>
        <p className="mx-auto mb-8 max-w-lg text-white/80">
          Get exclusive deals and offers delivered straight to your inbox. Stay updated on the
          latest health and wellness products.
        </p>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row"
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 rounded px-4 py-3 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Email address"
          />
          <button
            type="submit"
            className="rounded bg-ink px-8 py-3 text-sm font-bold uppercase text-white transition-colors hover:bg-ink-dark"
          >
            Sign up
          </button>
        </form>
      </div>
    </section>
  )
}
