export function Newsletter() {
  return (
    <section className="relative overflow-hidden" aria-label="Newsletter">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://picsum.photos/seed/vow-newsletter/1920/400)',
        }}
      />
      <div className="relative z-10 py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="mb-1 text-sm font-semibold uppercase tracking-[3px] text-white/70">
            only the best
          </p>
          <h2 className="mb-8 font-sans text-3xl font-bold text-white">
            subscribe for a 20% discount
          </h2>
          <form
            className="mb-6 flex flex-col gap-3 sm:flex-row"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="E-mail here"
              required
              className="flex-1 border-b-2 border-white/40 bg-transparent px-4 py-3 text-sm text-white placeholder-white/60 focus:border-white focus:outline-none"
              aria-label="Email address"
            />
            <button type="submit" className="btn-brand whitespace-nowrap">
              subscribe
            </button>
          </form>
          <p className="text-sm text-white/70">
            Join our mailing list to receive exclusive offers, new arrivals, and fashion inspiration
            delivered straight to your inbox.
          </p>
        </div>
      </div>
    </section>
  )
}
