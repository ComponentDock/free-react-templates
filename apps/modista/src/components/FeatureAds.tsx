const ads = [
  {
    id: 1,
    image: 'https://picsum.photos/seed/modista-ad1/600/700',
    badge: 'Sale',
    badgeColor: 'bg-brand-red',
    heading: 'Summer Dresses',
    hasOverlay: true,
    colSpan: 'col-span-5',
  },
  {
    id: 2,
    image: 'https://picsum.photos/seed/modista-ad2/500/700',
    badge: '10% off',
    badgeColor: 'bg-brand-red',
    heading: 'Winter Collection',
    hasOverlay: true,
    colSpan: 'col-span-4',
  },
  {
    id: 3,
    image: 'https://picsum.photos/seed/modista-ad3/400/700',
    badge: null,
    heading: '',
    hasOverlay: false,
    colSpan: 'col-span-3',
  },
] as const

export function FeatureAds() {
  return (
    <section className="mx-auto max-w-[1140px] px-4 py-8" aria-label="Feature ads">
      <div className="grid grid-cols-12 gap-4">
        {ads.map((ad) => (
          <div
            key={ad.id}
            className={`relative overflow-hidden ${ad.colSpan} max-sm:col-span-12 max-md:col-span-12`}
          >
            <img
              src={ad.image}
              alt={ad.heading || 'Fashion banner'}
              className="h-full w-full object-cover"
            />
            {ad.badge && (
              <span
                className={`absolute left-4 top-4 rounded-[3px] px-3 py-1 text-xs font-semibold uppercase text-white ${ad.badgeColor}`}
              >
                {ad.badge}
              </span>
            )}
            {ad.hasOverlay && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 hover:opacity-100">
                <h3 className="font-heading text-xl font-bold text-white">{ad.heading}</h3>
                <a
                  href="#shop"
                  className="mt-3 text-sm font-semibold text-white hover:text-brand-red transition-colors"
                >
                  Shop Now
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
