import { cn } from '@free-react-templates/ui'

const rooms = [
  { name: 'Deluxe Room', image: 'hibiscus-room-1', price: '$299' },
  { name: 'Deluxe Room', image: 'hibiscus-room-2', price: '$349' },
  { name: 'Deluxe Room', image: 'hibiscus-room-3', price: '$399' },
  { name: 'Deluxe Room', image: 'hibiscus-room-4', price: '$499' },
]

export function Rooms({ className }: { className?: string }) {
  return (
    <section id="rooms" className={cn('py-24 bg-paper', className)}>
      <div className="mx-auto max-w-7xl px-4">
        <p className="mb-2 text-center font-heading text-sm font-semibold uppercase tracking-[4px] text-brand">
          Our Rooms
        </p>
        <h2 className="mb-12 text-center font-heading text-3xl font-bold text-ink sm:text-4xl">
          Hotel Rooms
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {rooms.map((room, i) => (
            <div key={i} className="group relative overflow-hidden">
              <img
                src={`https://picsum.photos/seed/${room.image}/400/300`}
                alt={room.name}
                className="h-64 w-full object-cover transition group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-4">
                <h3 className="font-heading text-lg font-bold text-white">{room.name}</h3>
                <p className="mb-3 text-sm text-white/70">{room.price} / night</p>
                <a
                  href="#booking"
                  className="inline-block bg-brand px-4 py-2 font-heading text-xs font-semibold uppercase tracking-[2px] text-white transition hover:bg-brand/90"
                >
                  Booking Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
