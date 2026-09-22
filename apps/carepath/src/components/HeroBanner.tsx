export function HeroBanner() {
  return (
    <section className="relative flex min-h-[600px] items-center bg-brand" aria-label="Hero banner">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: "url('https://picsum.photos/seed/carepath-hero/1920/1080')" }}
      />
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20">
        <div className="max-w-xl">
          <h1 className="mb-6 text-4xl font-bold font-serif text-white leading-tight md:text-5xl">
            Making Health Care Better Together
          </h1>
          <p className="mb-8 text-lg text-white/80">
            Land meat winged called subdue without very light in all years sea appear midst forth
            image him third there set.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#appointment"
              className="inline-block bg-white px-8 py-3 text-sm font-medium text-brand hover:bg-white/90 transition-colors"
            >
              Make an Appointment
            </a>
            <a
              href="#services"
              className="inline-block border border-white px-8 py-3 text-sm font-medium text-white hover:bg-white/10 transition-colors"
            >
              View Department
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
