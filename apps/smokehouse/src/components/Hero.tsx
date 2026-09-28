export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          'linear-gradient(rgba(49,49,55,0.4), rgba(49,49,55,0.4)), url(https://picsum.photos/seed/steakhouse-hero/1920/1080)',
      }}
    >
      <div className="text-center">
        <h1 className="mb-6 text-4xl font-bold text-white md:text-6xl lg:text-7xl">
          Welcome To Smokehouse
          <br />
          Food &amp; Restaurant
        </h1>
        <a
          href="#reservation"
          className="inline-flex items-center gap-2 border-2 border-white px-8 py-3 text-sm font-semibold uppercase tracking-widest text-white transition-colors hover:bg-white hover:text-heading"
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <polygon points="5,3 19,12 5,21" />
          </svg>
          Play Video
        </a>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white"
        aria-label="Scroll down"
      >
        <svg
          className="h-8 w-8 animate-bounce"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <rect x="8" y="1" width="8" height="14" rx="4" />
          <circle cx="12" cy="5" r="1" fill="currentColor" />
          <polyline points="6 20 12 16 18 20" />
        </svg>
      </a>
    </section>
  )
}
