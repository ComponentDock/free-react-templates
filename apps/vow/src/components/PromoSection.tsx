const promos = [
  { id: 1, discount: '-30% off', category: 'on all bags', seed: 'vow-promo-1' },
  { id: 2, discount: '-30% off', category: 'coats & jackets', seed: 'vow-promo-2' },
  { id: 3, discount: '-25% off', category: 'on Sandals', seed: 'vow-promo-3' },
]

export function PromoSection() {
  return (
    <section className="py-16" aria-labelledby="promo-heading">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <p className="mb-1 text-sm font-semibold uppercase tracking-[3px] text-body-text">
          only the best
        </p>
        <h2
          id="promo-heading"
          className="mb-10 font-sans text-3xl font-bold capitalize text-heading"
        >
          promo prices
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {promos.map((p) => (
            <article key={p.id} className="group relative overflow-hidden">
              <div className="relative h-80 overflow-hidden">
                <img
                  src={`https://picsum.photos/seed/${p.seed}/400/320`}
                  alt={p.category}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="promo-overlay">
                  <span className="text-2xl font-bold">{p.discount}</span>
                  <span className="mt-1 text-sm">{p.category}</span>
                </div>
              </div>
              <div className="mt-4 text-center">
                <a
                  href="#"
                  className="text-sm font-semibold uppercase tracking-wider text-brand transition-colors hover:text-brand-dark"
                >
                  Shop Now
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
