import { ArrowRight } from 'lucide-react'

const rooms = [
  {
    name: 'Classic Bed Room',
    price: '$150.00',
    description:
      'Beginning fourth dominion creeping god was. Beginning, which fly yieldi dry beast moved blessed.',
    image: 'tidestone-room1',
  },
  {
    name: 'Premium Room',
    price: '$170.00',
    description:
      'Beginning fourth dominion creeping god was. Beginning, which fly yieldi dry beast moved blessed.',
    image: 'tidestone-room2',
  },
  {
    name: 'Family Room',
    price: '$190.00',
    description:
      'Beginning fourth dominion creeping god was. Beginning, which fly yieldi dry beast moved blessed.',
    image: 'tidestone-room3',
  },
]

export function ExploreRooms() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <h2 className="font-display text-3xl font-bold text-ink">Explore Our Rooms</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {rooms.map((room) => (
            <div key={room.name} className="overflow-hidden bg-white shadow-md">
              <div className="overflow-hidden">
                <img
                  src={`https://picsum.photos/seed/${room.image}/400/280`}
                  alt={room.name}
                  className="h-56 w-full object-cover transition-transform hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-lg font-bold text-brand">
                  {room.price} <span className="text-xs font-normal text-mist">/ Per Night</span>
                </h3>
                <h4 className="mb-3 font-display text-xl font-semibold text-ink">
                  <a href="#" className="hover:text-brand">
                    {room.name}
                  </a>
                </h4>
                <p className="mb-4 text-sm leading-relaxed text-mist">{room.description}</p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-sm font-medium text-ink transition-colors hover:text-brand"
                >
                  Book Now <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
