export function Newsletter() {
  return (
    <section className="bg-light py-16">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <h2 className="mb-4 font-heading text-2xl font-bold text-ink">Need your help?</h2>
        <p className="mb-8 text-sm text-gray-500">
          Subscribe to our newsletter and stay updated with our latest campaigns and events.
        </p>
        <form className="mx-auto flex max-w-lg" onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            placeholder="Your Email Address"
            aria-label="Email address"
            className="flex-1 border border-gray-200 bg-white px-4 py-3 text-sm text-ink placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button
            type="submit"
            aria-label="Subscribe"
            className="bg-primary px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-primary-600"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  )
}
