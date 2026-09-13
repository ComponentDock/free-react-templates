import { Check } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const rooms = [
  {
    title: 'Luxury Double Suite',
    image: 'seaview-room-1',
    price: '$129',
    description:
      'Our spacious double suite features floor-to-ceiling windows with panoramic ocean views, a king-size bed, and a private balcony perfect for watching the sunset.',
    features: ['Ocean View', 'King Size Bed', 'Private Balcony'],
  },
  {
    title: 'Luxury Single Room',
    image: 'seaview-room-2',
    price: '$89',
    description:
      'A cozy and elegantly designed single room offering modern comforts, a plush queen bed, and direct access to the beach promenade.',
    features: ['Beach Access', 'Queen Bed', 'Smart TV'],
  },
]

export function RoomsShowcase() {
  return (
    <section id="rooms" className="bg-white py-24">
      <div className="mx-auto max-w-6xl space-y-24 px-6">
        {rooms.map((room, index) => {
          const isReversed = index % 2 === 1
          return (
            <div
              key={room.title}
              className={cn(
                'flex flex-col gap-10 lg:flex-row lg:items-center',
                isReversed && 'lg:flex-row-reverse',
              )}
            >
              {/* Image */}
              <div className="flex-1">
                <img
                  src={`https://picsum.photos/seed/${room.image}/800/600`}
                  alt={room.title}
                  className="min-h-[400px] w-full rounded object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex-1 space-y-6">
                <p className="text-sm font-semibold uppercase tracking-wider text-primary-400">
                  Rooms
                </p>
                <h3 className="font-display text-4xl font-bold text-navy">{room.title}</h3>
                <p className="text-ink">{room.description}</p>

                <ul className="space-y-3">
                  {room.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-ink">
                      <Check size={18} className="text-primary-400" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex items-end gap-3 pt-2">
                  <span className="text-3xl font-bold text-navy">{room.price}</span>
                  <span className="mb-1 text-sm text-smoke">/Night</span>
                </div>

                <a
                  href="#booking"
                  className={cn(
                    'inline-block rounded bg-primary-400 px-8 py-3',
                    'text-sm font-semibold uppercase tracking-wider text-white',
                    'transition-colors hover:bg-primary-400/90',
                  )}
                >
                  Book Now
                </a>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
