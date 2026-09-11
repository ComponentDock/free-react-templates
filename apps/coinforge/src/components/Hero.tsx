export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-navy px-6 pt-32 pb-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
        <div className="space-y-8">
          <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl">
            Fast Growing ICO Agency for Blockchain Investors and Founders
          </h1>
          <p className="text-lg text-light/80">
            Discover a secure, transparent platform designed for the next generation of blockchain
            investors and project founders.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#tokensale"
              className="rounded-full bg-gradient-to-r from-gold to-coral px-8 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              Register for the ICO
            </a>
            <a
              href="#whitepaper"
              className="rounded-full border-2 border-light/30 px-8 py-3 text-sm font-semibold text-light transition-colors hover:border-light hover:text-white"
            >
              Download Whitepaper
            </a>
          </div>
        </div>
        <div className="flex justify-center">
          <img
            src="https://picsum.photos/seed/coinforge-hero/500/400"
            alt="Blockchain illustration"
            className="w-full max-w-md rounded-lg"
            loading="eager"
          />
        </div>
      </div>
    </section>
  )
}
