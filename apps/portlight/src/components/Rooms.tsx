import { cn } from '@free-react-templates/ui'

const ROOMS = [
  {
    name: 'King Room',
    price: 120,
    image: 'https://picsum.photos/seed/portlight-room-king/600/400',
  },
  {
    name: 'Suite',
    price: 200,
    image: 'https://picsum.photos/seed/portlight-room-suite/600/400',
  },
  {
    name: 'Deluxe',
    price: 160,
    image: 'https://picsum.photos/seed/portlight-room-deluxe/600/400',
  },
  {
    name: 'Superior',
    price: 140,
    image: 'https://picsum.photos/seed/portlight-room-superior/600/400',
  },
] as const

interface RoomsProps {
  className?: string
}

export function Rooms({ className }: RoomsProps) {
  return (
    <section id="rooms" className={cn('bg-paper py-20', className)}>
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-brand">
            Harbor Lights Rooms
          </p>
          <h2 className="text-3xl font-bold text-ink">Hotel Master&apos;s Rooms</h2>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {ROOMS.map((room) => (
            <div
              key={room.name}
              className="group overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-xl"
            >
              <div className="aspect-[3/2] overflow-hidden">
                <img
                  src={room.image}
                  alt={room.name}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <div className="flex items-baseline justify-between">
                  <span className="text-lg font-bold text-brand">${room.price}.00</span>
                  <span className="text-xs text-mist">per night</span>
                </div>
                <h3 className="mt-2 text-sm font-semibold text-ink">{room.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
