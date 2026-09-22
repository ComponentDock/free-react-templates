const ROOMS = [
  { name: 'Suite Room', price: 120, image: 'https://picsum.photos/seed/opulux-room1/400/300' },
  { name: 'Family Room', price: 20, image: 'https://picsum.photos/seed/opulux-room2/400/300' },
  { name: 'Deluxe Room', price: 150, image: 'https://picsum.photos/seed/opulux-room3/400/300' },
  { name: 'Classic Room', price: 130, image: 'https://picsum.photos/seed/opulux-room4/400/300' },
  { name: 'Superior Room', price: 300, image: 'https://picsum.photos/seed/opulux-room5/400/300' },
  { name: 'Luxury Room', price: 500, image: 'https://picsum.photos/seed/opulux-room6/400/300' },
]

export function Rooms() {
  return (
    <section id="rooms" className="bg-light-bg py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-gold">Discover</p>
          <h2 className="font-heading text-4xl font-bold">Our Rooms</h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {ROOMS.map((room) => (
            <div
              key={room.name}
              className="group overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-lg"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={room.image}
                  alt={room.name}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="font-heading text-xl font-bold">{room.name}</h3>
                  <span className="text-sm text-gold">
                    ${room.price}
                    <span className="text-gray-400">/night</span>
                  </span>
                </div>
                <a
                  href="#"
                  className="mt-3 inline-block text-sm font-medium text-cyan transition-colors hover:text-cyan-hover"
                >
                  View Room Details →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
