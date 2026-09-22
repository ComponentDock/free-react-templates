import { ROOMS } from '../data'

/** Rooms — 3-column grid of 6 room cards with picsum images,
    room name, and price per night. */
export function Rooms() {
  return (
    <section id="rooms" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-12 text-center font-heading text-4xl font-bold text-ink">Our Rooms</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {ROOMS.map((room) => (
            <div
              key={room.name}
              className="group overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-lg"
            >
              <div className="overflow-hidden">
                <img
                  src={room.image}
                  alt={room.name}
                  className="h-56 w-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl font-bold text-ink">{room.name}</h3>
                <p className="mt-2 text-lg font-semibold text-brand">{room.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
