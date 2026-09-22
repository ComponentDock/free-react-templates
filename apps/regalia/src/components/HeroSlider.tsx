export function HeroSlider() {
  return (
    <section className="relative flex min-h-[500px] items-center justify-center bg-bg-dark">
      <img
        src="https://picsum.photos/seed/regalia-hero/1600/600"
        alt="Luxury hotel exterior"
        className="absolute inset-0 h-full w-full object-cover opacity-60"
      />
      <div className="relative z-10 px-4 text-center text-white">
        <h1 className="mb-4 font-heading text-5xl font-bold md:text-6xl">
          Experience Luxury Living
        </h1>
        <p className="mb-8 text-lg text-gray-200">Where elegance meets comfort in every detail</p>
        <a
          href="#reservation"
          className="inline-block rounded bg-accent-gold px-8 py-3 font-medium text-white transition hover:bg-accent-gold-light"
        >
          Book Your Stay
        </a>
      </div>
    </section>
  )
}
