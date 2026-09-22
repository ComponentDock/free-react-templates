const rooms = [
  {
    type: 'Standard',
    title: 'Standard Double Room',
    price: '$99',
    description:
      'A comfortable room with all the essential amenities for a pleasant stay. Includes a double bed, en-suite bathroom, and city views.',
    image: 'https://picsum.photos/seed/belmont-standard/600/400',
  },
  {
    type: 'Superior',
    title: 'Superior Double Room',
    price: '$150',
    description:
      'An upgraded room featuring premium furnishings, a king-size bed, balcony access, and complimentary breakfast service.',
    image: 'https://picsum.photos/seed/belmont-superior/600/400',
  },
  {
    type: 'Deluxe',
    title: 'Deluxe Double Room',
    price: '$200',
    description:
      'Our finest accommodation with a private pool, panoramic views, exclusive lounge access, and personalized butler service.',
    image: 'https://picsum.photos/seed/belmont-deluxe/600/400',
  },
]

export function Rooms() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-medium tracking-[0.2em] uppercase text-brand">
            our rooms
          </p>
          <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">Our Rooms</h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {rooms.map((room) => (
            <div key={room.title} className="group overflow-hidden rounded bg-white shadow-md">
              <div className="relative overflow-hidden">
                <img
                  src={room.image}
                  alt={room.title}
                  className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 rounded bg-brand px-3 py-1 text-xs font-semibold text-white">
                  {room.type}
                </span>
                <span className="absolute top-4 right-4 text-lg font-bold text-white drop-shadow">
                  {room.price}
                </span>
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-lg font-semibold text-ink">{room.title}</h3>
                <p className="mb-4 text-sm leading-relaxed text-mist">{room.description}</p>
                <button className="rounded bg-brand px-6 py-2 text-sm font-semibold text-white transition hover:bg-brand-dark">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
