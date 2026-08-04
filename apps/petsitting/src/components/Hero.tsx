export function Hero() {
  return (
    <section id="top" className="bg-brand dark:bg-gray-900">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-4 py-20 sm:px-6 md:flex-row md:py-28">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-5xl">
            Highest Quality Care For Pets You&apos;ll Love
          </h1>
          <p className="mt-6 max-w-md text-lg font-light leading-relaxed text-white/90">
            We know you love your pets like family. Our trusted sitters give them the same warmth,
            attention, and safety you would.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
            <a
              href="#services"
              className="inline-block rounded-full bg-white px-10 py-4 text-sm font-bold text-brand transition-colors hover:bg-gray-100"
            >
              Learn More
            </a>
            <a
              href="#pricing"
              className="inline-block rounded-full border border-white px-10 py-4 text-sm font-bold text-white transition-colors hover:bg-white/10"
            >
              Get Started
            </a>
          </div>
        </div>
        <div className="flex-1">
          <img
            src="https://picsum.photos/seed/petsitting-hero/640/520"
            alt="A happy dog being cared for by a pet sitter"
            className="mx-auto w-full max-w-md rounded-lg"
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  )
}
