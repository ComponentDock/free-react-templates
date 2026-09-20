export function Newsletter() {
  return (
    <section className="relative py-16 overflow-hidden">
      <img
        src="https://picsum.photos/seed/erudit-newsletter-bg/1600/400"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-sky-900/80" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-2">Subscribe Newsletter</h2>
        <p className="text-white/80 mb-8">Subscribe to our newsletter and get the latest updates</p>

        <form
          className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
          />
          <button
            type="submit"
            className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 rounded-md text-sm font-medium transition-colors whitespace-nowrap"
          >
            Subscribe Now
          </button>
        </form>
      </div>
    </section>
  )
}
