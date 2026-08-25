import { Star, Users, Maximize } from 'lucide-react'

const rooms = [
  {
    title: 'Suite Room',
    price: '$299',
    image: 'https://picsum.photos/seed/solace-room1/600/400',
    features: ['King Bed', 'Ocean View', '65m²'],
    rating: 4.9,
  },
  {
    title: 'Family Room',
    price: '$399',
    image: 'https://picsum.photos/seed/solace-room2/600/400',
    features: ['2 Queen Beds', 'Garden View', '85m²'],
    rating: 4.8,
  },
  {
    title: 'Deluxe Room',
    price: '$499',
    image: 'https://picsum.photos/seed/solace-room3/600/400',
    features: ['King Bed', 'Panoramic View', '100m²'],
    rating: 5.0,
  },
]

export function FeaturedRooms() {
  return (
    <section id="rooms" className="bg-surface py-20">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-brand">
          Our Rooms
        </p>
        <h2 className="font-heading text-3xl font-bold text-ink md:text-4xl">Featured Rooms</h2>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {rooms.map(({ title, price, image, features, rating }) => (
            <div
              key={title}
              className="overflow-hidden rounded-lg bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={image}
                  alt={title}
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute right-3 top-3 rounded bg-brand px-3 py-1 text-xs font-bold text-white">
                  {price}/night
                </span>
              </div>
              <div className="p-6 text-left">
                <div className="flex items-center gap-1 text-brand">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className={
                        i < Math.floor(rating) ? 'fill-brand' : 'fill-gray-300 text-gray-300'
                      }
                    />
                  ))}
                  <span className="ml-1 text-xs text-muted">{rating}</span>
                </div>
                <h3 className="mt-2 font-heading text-xl font-bold text-ink">{title}</h3>
                <div className="mt-3 flex flex-wrap gap-3 text-xs text-muted">
                  {features.map((f) => (
                    <span key={f} className="flex items-center gap-1">
                      {f.includes('Bed') ? <Users size={12} /> : <Maximize size={12} />}
                      {f}
                    </span>
                  ))}
                </div>
                <a
                  href="#contact"
                  className="mt-5 inline-block rounded bg-brand px-5 py-2 text-sm font-bold text-white transition-colors hover:bg-brand-dark"
                >
                  Book Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
