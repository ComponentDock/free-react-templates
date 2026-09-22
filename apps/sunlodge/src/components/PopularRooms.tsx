const ROOMS = [
  {
    title: 'Deluxe Suite',
    price: '$450/Night',
    description:
      'Spacious suite with panoramic views, king bed, and private balcony overlooking the city.',
    image: 'https://picsum.photos/seed/sunlodge-room1/600/400',
  },
  {
    title: 'Premium Room',
    price: '$320/Night',
    description:
      'Elegant room with modern amenities, queen bed, and complimentary breakfast service.',
    image: 'https://picsum.photos/seed/sunlodge-room2/600/400',
  },
  {
    title: 'Executive Suite',
    price: '$580/Night',
    description:
      'Top-floor suite with separate living area, workspace, and exclusive lounge access.',
    image: 'https://picsum.photos/seed/sunlodge-room3/600/400',
  },
  {
    title: 'Family Room',
    price: '$380/Night',
    description:
      'Comfortable family room with two double beds, kid-friendly amenities, and garden view.',
    image: 'https://picsum.photos/seed/sunlodge-room4/600/400',
  },
] as const

export function PopularRooms() {
  return (
    <section id="rooms" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <h2 className="font-heading text-3xl font-bold text-ink md:text-4xl">
            Our Popular Rooms
          </h2>
          <p className="mt-3 text-mute">
            Choose from our selection of beautifully appointed rooms and suites.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {ROOMS.map((room) => (
            <article
              key={room.title}
              className="group overflow-hidden rounded bg-white shadow-md transition-shadow hover:shadow-xl"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={room.image}
                  alt={room.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="font-heading text-lg font-bold text-ink">{room.title}</h3>
                  <span className="whitespace-nowrap text-sm font-semibold text-brand">
                    {room.price}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-mute">{room.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
