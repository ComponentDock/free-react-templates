export function Banner() {
  return (
    <section
      id="services"
      className="relative flex min-h-[400px] items-center justify-center overflow-hidden bg-fixed bg-center bg-cover"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/fitcraft-banner/1920/600)' }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-ink/70" />

      <div className="relative z-10 px-4 text-center">
        <h2 className="mb-4 font-[Oswald] text-3xl font-bold uppercase text-white md:text-4xl">
          Registration now to get more deals
        </h2>
        <p className="mb-8 font-[Muli] text-lg text-white/80">
          Where health, beauty and fitness meet.
        </p>
        <a href="#contact" className="fitcraft-btn">
          Appointment
        </a>
      </div>
    </section>
  )
}
