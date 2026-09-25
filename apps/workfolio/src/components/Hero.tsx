export function Hero() {
  return (
    <section className="relative flex min-h-[600px] items-center bg-navy">
      {/* Decorative pattern on right */}
      <div className="absolute inset-y-0 right-0 hidden w-1/2 lg:block">
        <div className="h-full w-full bg-gradient-to-l from-coral/10 to-transparent" />
        <div className="absolute right-0 top-0 h-full w-full opacity-10">
          <svg className="h-full w-full" viewBox="0 0 400 600" fill="none">
            <circle cx="300" cy="100" r="200" fill="#ea5267" opacity="0.15" />
            <circle cx="350" cy="400" r="150" fill="#ea5267" opacity="0.1" />
            <circle cx="200" cy="500" r="100" fill="#ea5267" opacity="0.08" />
          </svg>
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-6 py-32">
        <div className="max-w-xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-wider text-white/70">
            Hi there, This is Alex
          </p>
          <h1 className="mb-8 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
            Digital product designer
          </h1>
          <a
            href="#contact"
            className="inline-block bg-coral px-8 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-coral-hover"
          >
            Contact me
          </a>
        </div>
      </div>
    </section>
  )
}
