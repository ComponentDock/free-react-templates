const rooms = [
  {
    name: 'Single Room',
    price: 90,
    image: 'https://picsum.photos/seed/lodgely-room-1/400/300',
  },
  {
    name: 'Family Room',
    price: 120,
    image: 'https://picsum.photos/seed/lodgely-room-2/400/300',
  },
  {
    name: 'Presidential Room',
    price: 250,
    image: 'https://picsum.photos/seed/lodgely-room-3/400/300',
  },
] as const

export function Rooms() {
  return (
    <section id="rooms" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-primary-400">
            Rooms & Suites
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">
            Our Rooms & Suites
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rooms.map((room) => (
            <div key={room.name} className="group relative overflow-hidden rounded-lg">
              <img
                src={room.image}
                alt={`${room.name} interior`}
                className="h-72 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-ink/80 to-transparent p-6">
                <h3 className="font-display text-lg font-semibold text-white">{room.name}</h3>
                <p className="mt-1 text-2xl font-bold text-primary-400">
                  ${room.price}
                  <span className="text-sm font-normal text-gray-300"> / Per night</span>
                </p>
                <a
                  href="#booking"
                  className="mt-4 inline-block border-b border-primary-400 text-sm font-semibold text-white transition-colors hover:text-primary-400"
                >
                  More Details
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
