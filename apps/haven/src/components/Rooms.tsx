const rooms = [
  {
    name: 'Double Room',
    price: 199,
    image: 'https://picsum.photos/seed/haven-room-1/400/300',
    specs: [
      { label: 'Size', value: '30 ft' },
      { label: 'Capacity', value: 'Max 5 guests' },
      { label: 'Bed', value: 'King Beds' },
      { label: 'Services', value: 'Wifi, TV, Bathroom' },
    ],
  },
  {
    name: 'Premium King Room',
    price: 159,
    image: 'https://picsum.photos/seed/haven-room-2/400/300',
    specs: [
      { label: 'Size', value: '30 ft' },
      { label: 'Capacity', value: 'Max 5 guests' },
      { label: 'Bed', value: 'King Beds' },
      { label: 'Services', value: 'Wifi, TV, Bathroom' },
    ],
  },
  {
    name: 'Deluxe Room',
    price: 198,
    image: 'https://picsum.photos/seed/haven-room-3/400/300',
    specs: [
      { label: 'Size', value: '30 ft' },
      { label: 'Capacity', value: 'Max 5 guests' },
      { label: 'Bed', value: 'King Beds' },
      { label: 'Services', value: 'Wifi, TV, Bathroom' },
    ],
  },
  {
    name: 'Family Room',
    price: 299,
    image: 'https://picsum.photos/seed/haven-room-4/400/300',
    specs: [
      { label: 'Size', value: '30 ft' },
      { label: 'Capacity', value: 'Max 5 guests' },
      { label: 'Bed', value: 'King Beds' },
      { label: 'Services', value: 'Wifi, TV, Bathroom' },
    ],
  },
] as const

export function Rooms() {
  return (
    <section id="rooms" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {rooms.map((room) => (
            <div key={room.name} className="group relative overflow-hidden rounded-lg">
              <img
                src={room.image}
                alt={`${room.name} interior`}
                className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-ink/80 to-transparent p-6">
                <h3 className="font-display text-lg font-semibold text-white">{room.name}</h3>
                <p className="mt-1 text-2xl font-bold text-primary-400">
                  ${room.price}
                  <span className="text-sm font-normal text-gray-300"> / Per night</span>
                </p>
                <table className="mt-3 text-xs text-gray-300">
                  <tbody>
                    {room.specs.map((spec) => (
                      <tr key={spec.label}>
                        <td className="pr-3 font-medium text-white">{spec.label}:</td>
                        <td>{spec.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
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
