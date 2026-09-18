export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[600px] items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('https://picsum.photos/seed/shingle-hero/1920/1080')" }}
    >
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 px-4 text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-gold-400">
          We Are Best Roofing Services
        </p>
        <h1 className="mb-6 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
          Dedicated to Providing the Highest Quality Roofing Services
        </h1>
        <a
          href="#appointment"
          className="inline-block border-2 border-gold-400 px-8 py-3 text-sm font-semibold uppercase tracking-wide text-gold-400 transition-colors hover:bg-gold-400 hover:text-white"
        >
          Book an Appointment
        </a>
      </div>
    </section>
  )
}
