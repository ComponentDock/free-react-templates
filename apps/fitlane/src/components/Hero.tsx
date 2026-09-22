export function Hero() {
  return (
    <section className="relative flex min-h-[80vh] items-center bg-navy-500">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://picsum.photos/seed/fitlane-gym/1920/1080)',
        }}
      />
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-accent-500/34 to-primary-500/34" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-8">
        <div className="max-w-xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary-500">
            Go to the gym now!
          </p>
          <h1 className="font-display text-5xl font-bold leading-tight text-white md:text-6xl">
            <span className="text-primary-500">Never</span> Limit
            <br />
            Yourself
          </h1>
          <a
            href="#about"
            className="mt-8 inline-block rounded bg-primary-500 px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-primary-600"
          >
            Read More
          </a>
        </div>
      </div>
    </section>
  )
}
