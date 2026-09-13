export function Hero() {
  return (
    <section id="home" className="relative flex items-center justify-center overflow-hidden bg-ink">
      <div className="absolute inset-0">
        <img
          src="https://picsum.photos/seed/elixir-hero/1600/900"
          alt="Pharmacy shelves with medicine bottles"
          className="h-full w-full object-cover opacity-40"
        />
      </div>
      <div className="relative mx-auto max-w-6xl px-4 py-24 text-center sm:px-6 lg:py-36">
        <h2 className="font-display text-lg font-semibold uppercase tracking-[0.25em] text-brand">
          Effective Medicine, New Medicine Everyday
        </h2>
        <h1 className="mt-4 font-display text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
          Welcome To Elixir
        </h1>
        <div className="mt-8">
          <a
            href="#products"
            className="inline-block rounded border-2 border-brand bg-brand px-12 py-4 text-sm font-bold uppercase tracking-widest text-white transition-colors hover:bg-transparent hover:text-brand"
          >
            Shop Now
          </a>
        </div>
      </div>
    </section>
  )
}
