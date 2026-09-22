const ROOMS = [
  {
    image: 'https://picsum.photos/seed/regalia-room1/600/400',
    title: 'Deluxe Suite',
    price: '$299',
    description: 'Spacious suite with panoramic views, king bed, and private balcony.',
  },
  {
    image: 'https://picsum.photos/seed/regalia-room2/600/400',
    title: 'Executive Room',
    price: '$199',
    description: 'Modern room with work desk, queen bed, and premium amenities.',
  },
  {
    image: 'https://picsum.photos/seed/regalia-room3/600/400',
    title: 'Garden Villa',
    price: '$449',
    description: 'Private villa with garden access, jacuzzi, and butler service.',
  },
]

export function Rooms() {
  return (
    <section className="bg-bg-warm py-20" aria-label="Rooms">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-3 font-heading text-3xl font-semibold text-text-heading">Our Rooms</h2>
          <p className="mx-auto max-w-2xl text-gray-500">
            Choose from our selection of beautifully appointed rooms and suites
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {ROOMS.map((room) => (
            <div
              key={room.title}
              className="overflow-hidden rounded-lg bg-white shadow-sm transition hover:shadow-md"
            >
              <img src={room.image} alt={room.title} className="h-56 w-full object-cover" />
              <div className="p-6">
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="font-heading text-xl font-semibold text-text-heading">
                    {room.title}
                  </h3>
                  <span className="text-lg font-bold text-accent-gold">{room.price}</span>
                </div>
                <p className="mb-4 text-sm text-gray-500">{room.description}</p>
                <button className="w-full rounded bg-brand-green py-2 text-sm font-medium text-white transition hover:bg-brand-green-dark">
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
