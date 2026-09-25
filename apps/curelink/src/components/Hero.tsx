export function Hero() {
  return (
    <section id="home" aria-label="Hero" className="relative overflow-hidden bg-purple-500">
      <img
        src="https://picsum.photos/seed/curelink-hero/1920/800"
        alt="Medical facility"
        className="absolute inset-0 h-full w-full object-cover opacity-30"
        loading="eager"
      />
      <div className="absolute inset-0 bg-primary-400/40" />
      <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:py-32">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            The most valuable thing is your <span className="text-teal-300">Health</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85">
            Healing Touch Hospital is established to offer people with good health care services. We
            have a team of expert doctors who are always ready to serve you with the best treatment.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="rounded-md bg-primary-400 px-8 py-3.5 font-semibold text-white shadow-lg transition-colors hover:bg-primary-500"
            >
              Our Services
            </a>
            <a
              href="#departments"
              className="rounded-md border border-white bg-transparent px-8 py-3.5 font-semibold text-white transition-colors hover:bg-white/10"
            >
              Book Appointment
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
