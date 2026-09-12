export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[600px] items-center bg-cover bg-center"
      style={{ backgroundImage: "url('https://picsum.photos/seed/verdure-hero/1920/1080')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:py-32">
        <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-widest text-verdure-400">
          Welcome to Verdure
        </span>
        <h1 className="mb-6 max-w-3xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
          Professional Gardeners &amp; Landscapers
        </h1>
        <p className="mb-10 max-w-2xl text-lg text-gray-200">
          We transform outdoor spaces into beautiful, thriving landscapes. With years of expertise
          in gardening, lawn care, and landscape design, our team is dedicated to bringing your
          vision to life with precision and care.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="#services"
            className="inline-flex items-center justify-center rounded-full bg-verdure-400 px-8 py-3 text-base font-semibold text-white transition-colors hover:bg-verdure-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-verdure-400 focus-visible:ring-offset-2"
          >
            What We Do?
          </a>
          <a
            href="#quote"
            className="inline-flex items-center justify-center rounded-full border-2 border-white px-8 py-3 text-base font-semibold text-white transition-colors hover:bg-white hover:text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2"
          >
            Request A Quote
          </a>
        </div>
      </div>
    </section>
  )
}
