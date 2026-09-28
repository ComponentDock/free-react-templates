export function CtaBanner() {
  return (
    <section
      className="relative flex items-center justify-center bg-cover bg-center bg-fixed bg-no-repeat py-24"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/zing-cta/1920/800)' }}
    >
      <div className="absolute inset-0 bg-brand-red/80" />
      <div className="relative z-10 text-center">
        <h2
          className="mb-4 text-4xl font-bold text-white md:text-5xl"
          style={{ fontFamily: 'var(--font-dancing)' }}
        >
          Private Dinners &amp; Happy Hours
        </h2>
        <p className="mb-8 max-w-xl mx-auto text-white/90">
          Experience the finest dining with our exclusive private dinner events and happy hour
          specials.
        </p>
        <a
          href="#reservation"
          className="inline-block rounded border border-white px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-brand-red"
        >
          Reservation
        </a>
      </div>
    </section>
  )
}
