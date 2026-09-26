export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[80vh] flex items-center bg-cover bg-center"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/finpilot-hero/1920/800)' }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
            Grow Big with
            <br />
            FinPilot Business
          </h1>
          <p className="text-white/80 text-lg mb-8 max-w-xl">
            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#services"
              className="inline-flex items-center justify-center bg-brand hover:bg-brand-dark text-white font-medium px-8 py-3 rounded transition-colors"
            >
              Our Services
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-ink font-medium px-8 py-3 rounded transition-colors gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
              See How it Works
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
