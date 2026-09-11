export function Newsletter() {
  return (
    <section className="bg-surface py-16 dark:bg-navy-900">
      <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
        <h2 className="text-3xl font-light text-heading dark:text-white">
          Subscribe to <span className="font-semibold text-gold-500">Newsletter</span>
        </h2>
        <p className="mt-4 text-muted">
          Stay updated with the latest crypto news, market trends, and exclusive insights delivered
          straight to your inbox.
        </p>
        <form className="mt-8 flex flex-col gap-3 sm:flex-row" onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            placeholder="Subscribe to newsletter"
            className="flex-1 rounded px-4 py-3 text-heading focus:ring-2 focus:ring-gold-500 focus:outline-none"
            aria-label="Email for newsletter"
          />
          <button
            type="submit"
            className="rounded bg-gold-500 px-6 py-3 font-semibold text-heading transition-colors hover:bg-gold-600"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  )
}
