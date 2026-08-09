const tiles = [
  { name: 'Shaves 01', seed: 'locks-shop-1' },
  { name: 'Shaves 02', seed: 'locks-shop-2' },
  { name: 'Shaves 03', seed: 'locks-shop-3' },
  { name: 'Shaves 04', seed: 'locks-shop-4' },
] as const

export function Shop() {
  return (
    <section className="bg-ink py-24 transition-colors dark:bg-ink-dark lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-bold text-white sm:text-4xl">
          Our <span className="text-brand">Shop</span>
        </h2>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {tiles.map((tile) => (
            <div
              key={tile.name}
              className="overflow-hidden rounded-2xl border border-white/10 bg-white/5"
            >
              <img
                src={`https://picsum.photos/seed/${tile.seed}/600/600`}
                alt=""
                className="h-56 w-full object-cover"
              />
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-white">{tile.name}</h3>
                  <span className="font-display text-xl text-brand">$150</span>
                </div>
                <a
                  href="#contact"
                  className="mt-4 inline-block text-sm font-semibold uppercase tracking-wide text-brand transition-colors hover:text-white"
                >
                  Add to cart
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
