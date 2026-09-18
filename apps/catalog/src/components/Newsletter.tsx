export function Newsletter() {
  return (
    <section className="bg-primary-500 py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <div>
            <h2 className="text-lg font-bold text-white">Newsletter</h2>
            <p className="text-sm text-white/70">
              Subscribe to get the latest listings and updates.
            </p>
          </div>
          <form className="flex w-full gap-2 md:w-auto" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Email"
              className="w-full rounded border-0 border-b border-white/50 bg-transparent px-2 py-2 text-sm text-white placeholder-white/70 outline-none md:w-64"
              aria-label="Email address"
            />
            <button
              type="submit"
              className="shrink-0 rounded bg-white px-5 py-2 text-sm font-bold text-primary-500 transition hover:bg-white/90"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
