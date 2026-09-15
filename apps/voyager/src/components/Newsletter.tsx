export function Newsletter() {
  return (
    <section className="relative overflow-hidden py-24" aria-label="Newsletter signup">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: 'url(https://picsum.photos/seed/voyager-newsletter/1600/600)',
        }}
      />
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 mx-auto max-w-2xl px-4 text-center">
        <h2 className="mb-4 text-3xl font-bold text-white">Sign Up for a Newsletter</h2>
        <p className="mb-8 text-white/80">
          Sign up for our mailing list to get latest updates and offers.
        </p>
        <form className="flex flex-col gap-3 sm:flex-row" onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 rounded px-4 py-3 text-sm"
            aria-label="Email address"
          />
          <button
            type="submit"
            className="rounded bg-primary-500 px-6 py-3 text-sm font-semibold text-black transition-colors hover:bg-primary-600"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  )
}
