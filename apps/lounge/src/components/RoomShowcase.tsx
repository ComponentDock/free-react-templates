import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const rooms = [
  {
    image: 'https://picsum.photos/seed/lounge-room-1/400/300',
    name: 'Ocean View Suite',
    price: '$299/night',
    description: 'Spacious suite with panoramic ocean views and luxury amenities.',
  },
  {
    image: 'https://picsum.photos/seed/lounge-room-2/400/300',
    name: 'Deluxe Garden Room',
    price: '$199/night',
    description: 'Tranquil room overlooking our lush tropical gardens.',
  },
  {
    image: 'https://picsum.photos/seed/lounge-room-3/400/300',
    name: 'Premier Sea Suite',
    price: '$349/night',
    description: 'Premium suite with private balcony and direct sea access.',
  },
  {
    image: 'https://picsum.photos/seed/lounge-room-4/400/300',
    name: 'Family Comfort Room',
    price: '$249/night',
    description: 'Perfect for families with extra space and connecting rooms.',
  },
]

export function RoomShowcase() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (dir: 'left' | 'right') => {
    const amount = 320
    scrollRef.current?.scrollBy({
      left: dir === 'left' ? -amount : amount,
      behavior: 'smooth',
    })
  }

  return (
    <section id="rooms" className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-brand">
            Our Rooms
          </p>
          <h2 className="font-heading text-3xl font-bold text-lounge-900 md:text-4xl">
            Explore our rooms
          </h2>
        </div>

        <div className="relative">
          <button
            onClick={() => scroll('left')}
            className="absolute -left-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg transition-colors hover:bg-lounge-50"
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-5 w-5 text-lounge-900" />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth pb-4"
            style={{ scrollbarWidth: 'none' }}
          >
            {rooms.map((room) => (
              <div
                key={room.name}
                className="relative h-72 min-w-[300px] flex-shrink-0 overflow-hidden rounded-lg"
              >
                <img src={room.image} alt={room.name} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-5">
                  <h3 className="font-heading text-lg font-bold text-white">{room.name}</h3>
                  <p className="mb-1 text-sm font-semibold text-brand">{room.price}</p>
                  <p className="text-xs text-white/70">{room.description}</p>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll('right')}
            className="absolute -right-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg transition-colors hover:bg-lounge-50"
            aria-label="Scroll right"
          >
            <ChevronRight className="h-5 w-5 text-lounge-900" />
          </button>
        </div>
      </div>
    </section>
  )
}
