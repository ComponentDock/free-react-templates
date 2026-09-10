export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[60vh] items-center justify-center bg-cover bg-center text-white"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/brasserie-hero/1600/900)' }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 px-4 text-center">
        <h1 className="font-heading text-5xl font-bold uppercase tracking-widest sm:text-7xl">
          Brasserie
        </h1>
        <p className="mt-4 text-lg tracking-wide text-gray-300">Premium Restaurant</p>
        <p className="mx-auto mt-4 max-w-xl text-sm text-gray-400">
          A refined dining experience where classic flavors meet modern elegance. Reserve your table
          tonight.
        </p>
        <a
          href="#reservation"
          className="mt-8 inline-block border-2 border-brand-red bg-brand-red px-8 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-brand-red-dark"
        >
          Reservation
        </a>
      </div>
    </section>
  )
}
