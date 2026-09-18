import { Clock, MapPin } from 'lucide-react'

const packages = [
  {
    image: 'https://picsum.photos/seed/tidal-tour1/400/250',
    duration: '5 Days / 4 Nights',
    title: 'Philippine Island Adventure',
    location: 'Philippines',
    price: 550,
  },
  {
    image: 'https://picsum.photos/seed/tidal-tour2/400/250',
    duration: '7 Days / 6 Nights',
    title: 'Canadian Rockies Explorer',
    location: 'Canada',
    price: 550,
  },
  {
    image: 'https://picsum.photos/seed/tidal-tour3/400/250',
    duration: '4 Days / 3 Nights',
    title: 'Thai Temple Trail',
    location: 'Thailand',
    price: 550,
  },
  {
    image: 'https://picsum.photos/seed/tidal-tour4/400/250',
    duration: '6 Days / 5 Nights',
    title: 'Australian Outback Safari',
    location: 'Australia',
    price: 550,
  },
  {
    image: 'https://picsum.photos/seed/tidal-tour5/400/250',
    duration: '5 Days / 4 Nights',
    title: 'Greek Island Hopping',
    location: 'Greece',
    price: 550,
  },
  {
    image: 'https://picsum.photos/seed/tidal-tour6/400/250',
    duration: '8 Days / 7 Nights',
    title: 'Mediterranean Coast Cruise',
    location: 'Mediterranean',
    price: 550,
  },
] as const

export function TourPackages() {
  return (
    <section id="tour" aria-label="Tour Packages" className="bg-light-bg py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand">
            Popular Packages
          </p>
          <h2 className="mt-3 text-3xl font-bold text-text-primary">Our Tour Packages</h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {packages.map((pkg) => (
            <div
              key={pkg.title}
              className="group overflow-hidden rounded-lg bg-white shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute left-3 top-3 rounded bg-brand px-3 py-1 text-xs font-semibold text-white">
                  {pkg.duration}
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-text-primary">{pkg.title}</h3>
                <div className="mt-2 flex items-center gap-1 text-sm text-text-secondary">
                  <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>{pkg.location}</span>
                </div>
                <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-4">
                  <div className="flex items-center gap-1 text-sm text-text-secondary">
                    <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>{pkg.duration}</span>
                  </div>
                  <span className="text-lg font-bold text-brand">
                    ${pkg.price}
                    <span className="text-xs font-normal text-text-secondary">/person</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
