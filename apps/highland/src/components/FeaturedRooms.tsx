const rooms = [
  {
    image: 'https://picsum.photos/seed/highland-room-1/1200/600',
    name: 'Superior Room',
    price: 250,
  },
  { image: 'https://picsum.photos/seed/highland-room-2/1200/600', name: 'Deluxe Room', price: 250 },
  {
    image: 'https://picsum.photos/seed/highland-room-3/1200/600',
    name: 'Signature Room',
    price: 250,
  },
  { image: 'https://picsum.photos/seed/highland-room-4/1200/600', name: 'Couple Room', price: 250 },
]

export function FeaturedRooms() {
  return (
    <section data-testid="featured-rooms" className="py-20 bg-white" id="rooms">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-brand text-sm font-normal uppercase tracking-widest">
            Featured Rooms
          </span>
          <h2 className="text-heading text-4xl lg:text-5xl font-normal mt-3">
            Choose a Better Room
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {rooms.map((room, i) => (
            <div key={i} className="relative group overflow-hidden h-72">
              <img
                src={room.image}
                alt={room.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-sm opacity-80">From ${room.price}/night</p>
                <h3 className="text-xl font-semibold mt-1">{room.name}</h3>
                <a
                  href="#rooms"
                  className="inline-block mt-3 text-white/80 hover:text-white text-sm border-b border-white/50 hover:border-white pb-0.5 transition-colors"
                >
                  Book Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
