export function CTA() {
  return (
    <section className="relative overflow-hidden bg-dark py-20">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: `url('https://picsum.photos/seed/shearglow-cta/1600/600')`,
        }}
      />
      <div className="relative mx-auto max-w-6xl px-4 text-center sm:px-6">
        <h2 className="font-serif text-3xl font-bold text-white sm:text-4xl">
          Make ShearGlow Your Number One Choice
        </h2>
        <div className="mx-auto mt-3 h-1 w-16 bg-gold-400" />
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="#contact"
            className="rounded-sm border border-gold-400 bg-gold-400 px-8 py-3 font-serif text-sm font-semibold uppercase text-white transition-colors hover:bg-gold-500"
          >
            Book An Appointment
          </a>
          <a
            href="#contact"
            className="rounded-sm border border-white px-8 py-3 font-serif text-sm font-semibold uppercase text-white transition-colors hover:bg-white hover:text-dark"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  )
}
