import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const ROOMS = [
  {
    name: 'Luxurious Room',
    occupancy: '2 Guests · 1 Bed',
    price: 500,
    image: 'https://picsum.photos/seed/lexicon-room1/600/400',
  },
  {
    name: 'Family Room',
    occupancy: '4 Guests · 2 Beds',
    price: 800,
    image: 'https://picsum.photos/seed/lexicon-room2/600/400',
  },
  {
    name: 'Couple Room',
    occupancy: '2 Guests · 1 King Bed',
    price: 650,
    image: 'https://picsum.photos/seed/lexicon-room3/600/400',
  },
]

export function Rooms() {
  const [active, setActive] = useState(0)

  const prev = () => setActive((i) => (i - 1 + ROOMS.length) % ROOMS.length)
  const next = () => setActive((i) => (i + 1) % ROOMS.length)

  return (
    <section id="rooms" className="section-padding bg-paper">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-12 text-center">
          <h2 className="font-display text-3xl font-bold text-ink md:text-4xl">Our Rooms</h2>
          <p className="mt-3 text-mist">
            Choose from our selection of beautifully appointed rooms and suites
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${active * 100}%)` }}
            >
              {ROOMS.map((room) => (
                <div key={room.name} className="w-full flex-shrink-0 px-4 md:w-1/3">
                  <div className="group relative overflow-hidden rounded">
                    <img
                      src={room.image}
                      alt={room.name}
                      className="h-72 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-card-overlay/90 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="font-display text-xl font-bold text-white">{room.name}</h3>
                      <p className="mt-1 text-sm text-white/70">{room.occupancy}</p>
                      <p className="mt-2 text-brand">
                        Started from <span className="font-bold">${room.price}</span>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full bg-brand/80 p-2 text-white transition-colors hover:bg-brand"
            aria-label="Previous room"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-brand/80 p-2 text-white transition-colors hover:bg-brand"
            aria-label="Next room"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  )
}
