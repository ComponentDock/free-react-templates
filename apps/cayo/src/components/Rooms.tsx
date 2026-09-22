import { cn } from '@free-react-templates/ui'

const rooms = [
  { name: 'Suite', image: 'cayo-room-1', price: '$100', stars: 5 },
  { name: 'Family', image: 'cayo-room-2', price: '$140', stars: 4 },
  { name: 'Deluxe', image: 'cayo-room-3', price: '$130', stars: 4 },
  { name: 'Classic', image: 'cayo-room-4', price: '$200', stars: 5 },
  { name: 'Superior', image: 'cayo-room-5', price: '$120', stars: 3 },
  { name: 'Luxe', image: 'cayo-room-6', price: '$500', stars: 5 },
]

function StarRating({ count }: { count: number }) {
  return (
    <div className="mb-2 flex justify-center gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="text-brand">
          &#9733;
        </span>
      ))}
    </div>
  )
}

export function Rooms({ className }: { className?: string }) {
  return (
    <section id="rooms" className={cn('py-24 bg-paper', className)}>
      <div className="mx-auto max-w-7xl px-4">
        <p className="mb-2 text-center font-heading text-sm font-semibold uppercase tracking-[4px] text-brand">
          Rooms
        </p>
        <h2 className="mb-12 text-center font-heading text-3xl font-bold text-ink sm:text-4xl">
          Book A Room
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rooms.map((room) => (
            <div key={room.name + room.price} className="group overflow-hidden bg-white shadow-sm">
              <div className="relative overflow-hidden">
                <img
                  src={`https://picsum.photos/seed/${room.image}/400/280`}
                  alt={room.name}
                  className="h-56 w-full object-cover transition group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6 text-center">
                <StarRating count={room.stars} />
                <h3 className="mb-2 font-heading text-xl font-bold text-ink">{room.name}</h3>
                <p className="mb-4 text-lg font-bold text-accent">{room.price} / night</p>
                <a
                  href="#booking"
                  className="inline-block bg-accent px-6 py-2 font-heading text-xs font-semibold uppercase tracking-[2px] text-white transition hover:bg-accent/90"
                >
                  Reserve A Room
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
