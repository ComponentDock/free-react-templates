export function Hero() {
  return (
    <section className="relative flex min-h-[520px] flex-col overflow-hidden bg-brown lg:min-h-[600px] lg:flex-row">
      {/* Left: text content */}
      <div className="flex flex-1 items-center justify-center px-6 py-16 lg:px-16 lg:py-0">
        <div className="max-w-lg">
          <h1 className="font-heading text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
            World Class Accommodation
          </h1>
          <p className="mt-4 text-lg text-white/80">
            Discover a hotel that defines a new dimension of luxury.
          </p>
          <a
            href="#rooms"
            className="mt-8 inline-block bg-brand px-10 py-3.5 text-sm font-semibold tracking-wide text-white transition-colors hover:bg-brand-hover"
          >
            View More
          </a>
        </div>
      </div>

      {/* Right: hero image */}
      <div className="relative flex-1">
        <img
          src="https://picsum.photos/seed/sunlodge-hero/800/600"
          alt="Luxurious hotel room with warm lighting"
          className="h-full w-full object-cover"
          loading="eager"
        />
      </div>
    </section>
  )
}
