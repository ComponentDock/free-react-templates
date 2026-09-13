export function CtaBanners() {
  return (
    <section className="bg-ink py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-8 md:grid-cols-2">
          <a
            href="#products"
            className="group relative flex min-h-[280px] items-center overflow-hidden rounded-lg"
          >
            <img
              src="https://picsum.photos/seed/elixir-cta-1/800/500"
              alt="Elixir products display"
              className="absolute inset-0 h-full w-full object-cover opacity-60 transition-opacity group-hover:opacity-40"
              loading="lazy"
            />
            <div className="relative z-10 p-8">
              <h3 className="text-2xl font-bold text-white">Elixir Products</h3>
              <p className="mt-3 max-w-xs text-sm text-white/70">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae ex ad minus rem
                odio voluptatem.
              </p>
            </div>
          </a>

          <a
            href="#about"
            className="group relative flex min-h-[280px] items-center overflow-hidden rounded-lg"
          >
            <img
              src="https://picsum.photos/seed/elixir-cta-2/800/500"
              alt="Expert rated products"
              className="absolute inset-0 h-full w-full object-cover opacity-60 transition-opacity group-hover:opacity-40"
              loading="lazy"
            />
            <div className="relative z-10 ml-auto p-8 text-right">
              <h3 className="text-2xl font-bold text-white">Rated by Experts</h3>
              <p className="mt-3 ml-auto max-w-xs text-sm text-white/70">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae ex ad minus rem
                odio voluptatem.
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
