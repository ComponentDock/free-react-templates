export function BookTable() {
  return (
    <section
      className="relative flex items-center bg-cover bg-center bg-fixed bg-no-repeat py-24"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/feastcraft-book/1920/800)' }}
    >
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center">
        <p className="mb-2 text-sm uppercase tracking-wider text-white/80">Book a table</p>
        <h2
          className="mb-6 text-4xl font-bold text-white md:text-5xl"
          style={{ fontFamily: 'var(--font-playfair)' }}
        >
          Book A Table Now
        </h2>
        <p className="mx-auto mb-8 max-w-xl text-lg text-white/80">
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
          there live the blind texts.
        </p>
        <a
          href="#contact"
          className="inline-block rounded-full bg-orange px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-orange-hover"
        >
          Book a table
        </a>
      </div>
    </section>
  )
}
