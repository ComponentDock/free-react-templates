import { MapPin } from 'lucide-react'

const DESTINATIONS = [
  {
    image: 'https://picsum.photos/seed/trekcraft-trend1/200/150',
    name: 'Bali, Indonesia',
    price: '$1,450',
    location: 'Southeast Asia',
  },
  {
    image: 'https://picsum.photos/seed/trekcraft-trend2/200/150',
    name: 'Santorini, Greece',
    price: '$2,100',
    location: 'Europe',
  },
  {
    image: 'https://picsum.photos/seed/trekcraft-trend3/200/150',
    name: 'Kyoto, Japan',
    price: '$1,890',
    location: 'East Asia',
  },
  {
    image: 'https://picsum.photos/seed/trekcraft-trend4/200/150',
    name: 'Machu Picchu, Peru',
    price: '$1,750',
    location: 'South America',
  },
  {
    image: 'https://picsum.photos/seed/trekcraft-trend5/200/150',
    name: 'Marrakech, Morocco',
    price: '$980',
    location: 'Africa',
  },
  {
    image: 'https://picsum.photos/seed/trekcraft-trend6/200/150',
    name: 'Dubai, UAE',
    price: '$2,300',
    location: 'Middle East',
  },
  {
    image: 'https://picsum.photos/seed/trekcraft-trend7/200/150',
    name: 'Reykjavik, Iceland',
    price: '$2,650',
    location: 'Europe',
  },
  {
    image: 'https://picsum.photos/seed/trekcraft-trend8/200/150',
    name: 'Cape Town, South Africa',
    price: '$1,600',
    location: 'Africa',
  },
]

export function TrendingDestinations() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-trek-text mb-4">
            Trending Destinations
          </h2>
          <p className="text-trek-muted max-w-xl mx-auto">
            The most popular destinations our travelers love.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {DESTINATIONS.map((d) => (
            <a
              key={d.name}
              href="#"
              className="flex items-center gap-3 bg-white rounded-xl p-3 hover:shadow-md transition-shadow group"
            >
              <img
                src={d.image}
                alt={d.name}
                className="w-16 h-16 rounded-lg object-cover flex-shrink-0 group-hover:scale-105 transition-transform"
              />
              <div className="min-w-0">
                <h4 className="font-semibold text-trek-text text-sm truncate">{d.name}</h4>
                <p className="text-trek-orange font-bold text-sm">{d.price}</p>
                <div className="flex items-center gap-1 text-trek-muted text-xs">
                  <MapPin size={10} />
                  {d.location}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
