export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[500px] items-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('https://picsum.photos/seed/praxis-hero/1600/600')" }}
    >
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="max-w-xl">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-coral-300">
            #1 Plastic Surgery Clinic
          </p>
          <h1 className="mb-4 text-4xl font-bold leading-tight text-white sm:text-5xl">
            Love the new you
          </h1>
          <p className="mb-8 text-base text-gray-200">
            Discover world-class cosmetic procedures performed by leading specialists. Your journey
            to confidence begins with a single step.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#about"
              className="rounded-full border-2 border-white px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-gray-900"
            >
              Read More
            </a>
            <a
              href="#appointment"
              className="rounded-full bg-coral-400 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-coral-500"
            >
              Make an Appointment
            </a>
          </div>
        </div>
      </div>

      {/* Slider dots */}
      <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        <span className="h-3 w-3 rounded-full bg-coral-400" aria-label="Slide 1" />
        <span className="h-3 w-3 rounded-full bg-white/50" aria-label="Slide 2" />
        <span className="h-3 w-3 rounded-full bg-white/50" aria-label="Slide 3" />
      </div>
    </section>
  )
}
