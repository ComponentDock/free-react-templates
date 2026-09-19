import { Star } from 'lucide-react'

const TOURS = [
  {
    image: 'https://picsum.photos/seed/trekcraft-tour1/600/400',
    date: '12 Jan — 24 Jan',
    destination: 'Bali, Indonesia',
    price: '$1,450',
    rating: 5,
  },
  {
    image: 'https://picsum.photos/seed/trekcraft-tour2/600/400',
    date: '05 Mar — 15 Mar',
    destination: 'Santorini, Greece',
    price: '$2,100',
    rating: 4,
  },
  {
    image: 'https://picsum.photos/seed/trekcraft-tour3/600/400',
    date: '20 Jun — 02 Jul',
    destination: 'Kyoto, Japan',
    price: '$1,890',
    rating: 5,
  },
]

export function BestTours() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-trek-text mb-4">
            We have the best tours
          </h2>
          <p className="text-trek-muted max-w-xl mx-auto">
            Discover amazing destinations with our curated tour packages designed to give you
            unforgettable experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TOURS.map((tour) => (
            <div
              key={tour.destination}
              className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer"
            >
              <img
                src={tour.image}
                alt={tour.destination}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute top-4 left-4 bg-white/90 text-trek-text text-xs font-semibold px-3 py-1 rounded-full">
                {tour.date}
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="flex items-center gap-1 mb-2">
                  {Array.from({ length: tour.rating }).map((_, i) => (
                    <Star key={i} size={14} className="fill-trek-star text-trek-star" />
                  ))}
                </div>
                <h3 className="font-display text-xl font-bold mb-1">{tour.destination}</h3>
                <p className="text-sm text-white/80">
                  From <span className="text-trek-orange font-bold">{tour.price}</span>
                </p>
              </div>
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="bg-gradient-to-r from-trek-orange to-trek-purple text-white text-xs font-bold px-4 py-2 rounded-full uppercase">
                  see more
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
