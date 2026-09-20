export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
      style={{
        backgroundImage: 'url(https://picsum.photos/seed/gigfest-hero/1920/1080)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black" />

      {/* Decorative SVG shapes */}
      <svg
        className="absolute left-10 top-20 h-24 w-24 text-brand/20"
        viewBox="0 0 100 100"
        aria-hidden="true"
      >
        <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2" />
      </svg>
      <svg
        className="absolute bottom-32 right-16 h-16 w-16 text-brand/15"
        viewBox="0 0 100 100"
        aria-hidden="true"
      >
        <rect
          x="10"
          y="10"
          width="80"
          height="80"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          transform="rotate(45 50 50)"
        />
      </svg>

      {/* Hero content */}
      <div className="relative z-10 text-center px-4">
        <span className="font-sans text-lg uppercase tracking-widest text-white/80">
          12 Feb, 2020
        </span>
        <h1 className="mt-4 font-heading text-6xl uppercase tracking-wider text-white sm:text-8xl">
          Concert 2020
        </h1>
        <p className="mt-4 font-sans text-xl text-body-text">Green Avenue, New York</p>
      </div>
    </section>
  )
}
