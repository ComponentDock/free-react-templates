const promos = [
  {
    id: 1,
    image: 'https://picsum.photos/seed/modista-promo1/700/400',
    heading: 'Best Summer Collection',
  },
  {
    id: 2,
    image: 'https://picsum.photos/seed/modista-promo2/700/400',
    heading: 'Best Summer Collection',
  },
] as const

export function PromoBanners() {
  return (
    <section className="mx-auto max-w-[1140px] px-4 py-8" aria-label="Promotional banners">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {promos.map((promo) => (
          <div key={promo.id} className="group relative overflow-hidden">
            <img
              src={promo.image}
              alt={promo.heading}
              className="h-[300px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/40 group-hover:opacity-100">
              <h3 className="font-heading text-xl font-bold text-white">{promo.heading}</h3>
              <a
                href="#shop"
                className="mt-3 text-sm font-semibold text-white hover:text-brand-red transition-colors"
              >
                Shop Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
