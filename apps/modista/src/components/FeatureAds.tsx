import { ArrowRight } from 'lucide-react'

const banners = [
  {
    image: 'https://picsum.photos/seed/modista-feat1/600/700',
    alt: 'Trendy jackets',
    heading: 'Trendy Jackets',
    badge: 'Sale',
    badgeColor: 'bg-brand-red',
    colSpan: 'col-span-5',
  },
  {
    image: 'https://picsum.photos/seed/modista-feat2/600/700',
    alt: 'Designer bags',
    heading: 'Designer Bags',
    badge: '10% off',
    badgeColor: 'bg-amber-500',
    colSpan: 'col-span-4',
  },
  {
    image: 'https://picsum.photos/seed/modista-feat3/600/700',
    alt: 'New arrivals',
    heading: '',
    badge: '',
    badgeColor: '',
    colSpan: 'col-span-3',
  },
] as const

export function FeatureAds() {
  return (
    <section className="mx-auto max-w-[1140px] px-4 py-10" aria-label="Feature advertisements">
      <div className="grid grid-cols-12 gap-4">
        {banners.map((banner) => (
          <div
            key={banner.image}
            className={`relative group overflow-hidden ${banner.colSpan} hidden sm:block`}
          >
            <img src={banner.image} alt={banner.alt} className="h-full w-full object-cover" />
            {/* Badge */}
            {banner.badge && (
              <span
                className={`absolute left-4 top-4 rounded-[3px] px-3 py-1 text-xs font-semibold text-white ${banner.badgeColor}`}
              >
                {banner.badge}
              </span>
            )}
            {/* Hover overlay */}
            {banner.heading && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
                <div className="text-center">
                  <h3 className="font-heading text-2xl font-bold text-white">{banner.heading}</h3>
                  <a
                    href="#"
                    className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-white hover:text-brand-red"
                  >
                    Shop Now <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      {/* Mobile: show images stacked */}
      <div className="grid grid-cols-1 gap-4 sm:hidden">
        {banners.map((banner) => (
          <div key={banner.image} className="relative group overflow-hidden">
            <img src={banner.image} alt={banner.alt} className="w-full object-cover" />
            {banner.badge && (
              <span
                className={`absolute left-4 top-4 rounded-[3px] px-3 py-1 text-xs font-semibold text-white ${banner.badgeColor}`}
              >
                {banner.badge}
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
