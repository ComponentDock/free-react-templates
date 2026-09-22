export function CtaBanner() {
  return (
    <section id="contact" className="relative py-24">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(https://picsum.photos/seed/lodgely-cta/1600/500)' }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-black/45" aria-hidden="true" />
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-4 sm:px-6 lg:flex-row">
        <h2 className="text-center text-3xl font-bold text-white lg:text-left lg:text-4xl">
          A Best Place To Stay. Reserve Now!
        </h2>
        <a
          href="#"
          className="whitespace-nowrap rounded-full border-2 border-white px-10 py-3 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-ink"
        >
          Reserve Now
        </a>
      </div>
    </section>
  )
}
