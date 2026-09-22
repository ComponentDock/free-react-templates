import { cn } from '@free-react-templates/ui'

const ROOMS = [
  {
    name: 'Classic Room',
    price: '$199',
    description:
      'A beautifully appointed room with elegant furnishings, plush bedding, and modern amenities for a comfortable stay.',
    image: 'https://picsum.photos/seed/casamora-room1/800/600',
  },
  {
    name: 'Deluxe Suite',
    price: '$299',
    description:
      'An expansive suite featuring premium furnishings, a separate living area, and breathtaking city views.',
    image: 'https://picsum.photos/seed/casamora-room2/800/600',
  },
] as const

interface RoomsProps {
  className?: string
}

export function Rooms({ className }: RoomsProps) {
  return (
    <section id="rooms" className={cn('bg-light-bg py-20', className)}>
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-heading text-3xl font-semibold text-heading-text">
            Great Offers
          </h2>
          <span className="mx-auto mb-8 block h-1 w-12 rounded bg-brand" />
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {ROOMS.map((room, idx) => (
            <article
              key={room.name}
              className={cn(
                'flex flex-col overflow-hidden bg-white shadow-sm md:flex-row',
                idx % 2 === 1 && 'md:flex-row-reverse',
              )}
            >
              <img
                src={room.image}
                alt={room.name}
                className="h-48 w-full object-cover md:h-auto md:w-1/2"
              />
              <div className="flex flex-col justify-center p-6 md:w-1/2">
                <span className="mb-2 font-heading text-4xl font-bold text-brand">
                  {room.price}
                </span>
                <h3 className="mb-2 font-heading text-xl font-semibold text-heading-text">
                  {room.name}
                </h3>
                <p className="mb-4 font-body text-sm leading-relaxed text-body-text">
                  {room.description}
                </p>
                <button
                  type="button"
                  className="self-start rounded-full border border-brand px-6 py-2 text-sm font-semibold text-brand transition-colors hover:bg-brand hover:text-white"
                >
                  Book Now
                </button>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-12 text-center">
          <button
            type="button"
            className="rounded-full border border-brand px-8 py-3 text-sm font-semibold text-brand transition-colors hover:bg-brand hover:text-white"
          >
            View All Rooms
          </button>
        </div>
      </div>
    </section>
  )
}
