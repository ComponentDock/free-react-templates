import { Clock, Users, Star } from 'lucide-react'

const PACKAGES = [
  {
    title: 'Bali Adventure',
    location: 'Bali, Indonesia',
    duration: '5 Days / 4 Nights',
    people: '2-6',
    rating: 4.9,
    price: 1299,
    image: 'https://picsum.photos/seed/jetpath-pkg1/600/400',
  },
  {
    title: 'Greek Island Hopping',
    location: 'Santorini & Mykonos',
    duration: '7 Days / 6 Nights',
    people: '2-8',
    rating: 4.8,
    price: 2199,
    image: 'https://picsum.photos/seed/jetpath-pkg2/600/400',
  },
  {
    title: 'Japan Explorer',
    location: 'Tokyo, Kyoto, Osaka',
    duration: '10 Days / 9 Nights',
    people: '2-4',
    rating: 4.9,
    price: 3499,
    image: 'https://picsum.photos/seed/jetpath-pkg3/600/400',
  },
]

export function Packages() {
  return (
    <section id="packages" className="py-20 bg-jet-light">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-jet-teal font-semibold text-sm uppercase tracking-wider mb-2">
            Best Packages
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-jet-navy">
            Curated Tour Packages
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PACKAGES.map((pkg) => (
            <div
              key={pkg.title}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative h-52">
                <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover" />
                <span className="absolute top-4 left-4 bg-jet-teal text-white text-xs font-semibold px-3 py-1 rounded-full">
                  Featured
                </span>
              </div>
              <div className="p-5">
                <p className="text-jet-muted text-xs mb-1">{pkg.location}</p>
                <h3 className="font-display text-lg font-bold text-jet-navy mb-3">{pkg.title}</h3>
                <div className="flex items-center gap-4 text-xs text-jet-muted mb-4">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> {pkg.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="w-3.5 h-3.5" /> {pkg.people}
                  </span>
                  <span className="flex items-center gap-1 text-amber-500">
                    <Star className="w-3.5 h-3.5 fill-current" /> {pkg.rating}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-jet-teal font-bold text-xl">
                    ${pkg.price.toLocaleString()}
                    <span className="text-jet-muted text-xs font-normal"> / person</span>
                  </p>
                  <a href="#" className="text-jet-teal text-sm font-semibold hover:underline">
                    View Details →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
