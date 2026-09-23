export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] pb-20 pt-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h1 className="mb-4 text-4xl font-bold leading-tight text-white md:text-5xl">
              Get Paid Easily without Hassle
            </h1>
            <p className="mb-6 max-w-md text-lg text-white/70">
              Far far away, behind the word mountains, far from the countries Vokalia and
              Consonantia, there live the blind texts. Separated they live.
            </p>
            <form
              className="flex gap-2"
              onSubmit={(e) => e.preventDefault()}
              aria-label="Email signup"
            >
              <input
                type="email"
                placeholder="Enter email address"
                className="flex-1 rounded-full border-2 border-white/20 bg-white/10 px-5 py-3 text-sm text-white placeholder-white/40 outline-none focus:border-brand"
                aria-label="Email address"
              />
              <button
                type="submit"
                className="rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
              >
                Sign up
              </button>
            </form>
          </div>

          <div className="hidden lg:block">
            <img
              src="https://picsum.photos/seed/swiftly-hero/600/400"
              alt="Payment platform illustration"
              className="mx-auto w-full max-w-lg"
              loading="eager"
            />
          </div>
        </div>
      </div>

      <div className="absolute -bottom-1 left-0 right-0 h-12 bg-surface" />
    </section>
  )
}
