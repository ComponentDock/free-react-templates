const rooms = [
  { name: 'Standard Room', image: 'pavilion-room1' },
  { name: 'Deluxe Room', image: 'pavilion-room2' },
  { name: 'Premium Suite', image: 'pavilion-room3' },
  { name: 'Family Suite', image: 'pavilion-room4' },
  { name: 'Presidential Suite', image: 'pavilion-room5' },
  { name: 'Ocean View Room', image: 'pavilion-room6' },
] as const

export function Rooms() {
  return (
    <section id="rooms" className="bg-paper py-20 lg:py-[120px]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-brand">
            Our Rooms
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold text-ink sm:text-4xl">
            Choose Your Room
          </h2>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {rooms.map((room) => (
            <article
              key={room.name}
              className="group overflow-hidden rounded-2xl bg-white shadow-md transition-shadow hover:shadow-xl"
            >
              <div className="relative overflow-hidden">
                <img
                  src={`https://picsum.photos/seed/${room.image}/600/400`}
                  alt={room.name}
                  className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-bold text-ink">{room.name}</h3>
                <p className="mt-2 text-sm text-mist">$150 / per night</p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-12 text-center">
          <button
            type="button"
            className="rounded-lg border-2 border-brand px-8 py-3 text-sm font-bold uppercase tracking-wide text-brand transition-colors hover:bg-brand hover:text-white"
          >
            View more
          </button>
        </div>
      </div>
    </section>
  )
}
