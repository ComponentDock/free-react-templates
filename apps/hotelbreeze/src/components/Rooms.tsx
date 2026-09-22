import { cn } from '@free-react-templates/ui'

const ROOMS = [
  {
    name: 'Standard Room',
    price: '$99',
    description: 'Comfortable room with city views and modern amenities.',
    image: 'https://picsum.photos/seed/hotelbreeze-room1/600/400',
  },
  {
    name: 'Deluxe Suite',
    price: '$199',
    description: 'Spacious suite with separate living area and premium furnishings.',
    image: 'https://picsum.photos/seed/hotelbreeze-room2/600/400',
  },
  {
    name: 'Premium Suite',
    price: '$299',
    description: 'Luxury suite with panoramic views and exclusive services.',
    image: 'https://picsum.photos/seed/hotelbreeze-room3/600/400',
  },
] as const

interface RoomsProps {
  className?: string
}

export function Rooms({ className }: RoomsProps) {
  return (
    <section id="rooms" className={cn('bg-paper py-20', className)}>
      <div className="mx-auto max-w-5xl px-4">
        <div className="mb-12">
          <h2 className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
            Our Rooms
          </h2>
          <span className="mb-8 block h-px w-12 bg-brand" />
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {ROOMS.map((room) => (
            <article key={room.name} className="overflow-hidden bg-white shadow-sm">
              <img src={room.image} alt={room.name} className="h-48 w-full object-cover" />
              <div className="p-6">
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="text-lg font-medium text-ink">{room.name}</h3>
                  <span className="text-lg font-semibold text-brand">{room.price}</span>
                </div>
                <p className="text-sm leading-relaxed text-mist">{room.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
