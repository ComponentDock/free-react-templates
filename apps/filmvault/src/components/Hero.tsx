export function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center bg-navy-900 pt-20">
      <div className="mx-auto w-full max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
          {/* Text content */}
          <div className="z-10 py-12 lg:py-0">
            <h1 className="font-[var(--font-heading)] text-6xl font-semibold leading-tight text-white md:text-7xl lg:text-8xl">
              Photography
            </h1>
            <p className="mt-2 font-[var(--font-heading)] text-lg italic text-white/60">
              Capturing moments
            </p>
            <div className="mt-8 flex items-center gap-6">
              <div className="text-5xl font-bold text-white/20">01</div>
              <div>
                <p className="font-[var(--font-heading)] text-xl font-medium text-white">
                  Travel Pro
                </p>
                <p className="mt-1 max-w-xs text-sm text-white/60">
                  Etiam tristique, metus pretium rutrum elementum, risus tortor.
                </p>
              </div>
            </div>
          </div>

          {/* Hero image */}
          <div className="relative hidden lg:block">
            <img
              src="https://picsum.photos/seed/filmvault-hero/800/600"
              alt="Photography hero"
              className="h-[500px] w-full rounded-lg object-cover"
              loading="eager"
            />
          </div>
        </div>
      </div>

      {/* Dot navigation */}
      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-3">
        <span className="h-3 w-3 rounded-full bg-white" />
        <span className="h-3 w-3 rounded-full bg-white/30" />
        <span className="h-3 w-3 rounded-full bg-white/30" />
      </div>
    </section>
  )
}
