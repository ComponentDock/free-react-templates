import { ArrowRight } from 'lucide-react'

const promos = [
  {
    image: 'https://picsum.photos/seed/modista-promo1/600/500',
    alt: 'Summer collection promo 1',
  },
  {
    image: 'https://picsum.photos/seed/modista-promo2/600/500',
    alt: 'Summer collection promo 2',
  },
] as const

export function PromoBanners() {
  return (
    <section className="mx-auto max-w-[1140px] px-4 py-10" aria-label="Promotional banners">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {promos.map((promo) => (
          <div key={promo.image} className="group relative overflow-hidden">
            <img
              src={promo.image}
              alt={promo.alt}
              className="h-[350px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
              <div className="text-center">
                <h3 className="font-heading text-2xl font-bold text-white">
                  Best Summer Collection
                </h3>
                <a
                  href="#"
                  className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-white hover:text-brand-red"
                >
                  Shop Now <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
