const cars = [
  {
    name: 'Toyota Camry',
    price: '$299/mo',
    image: 'https://picsum.photos/seed/aeroworks-car-1/600/400',
  },
  {
    name: 'Honda CR-V',
    price: '$349/mo',
    image: 'https://picsum.photos/seed/aeroworks-car-2/600/400',
  },
  { name: 'BMW X5', price: '$599/mo', image: 'https://picsum.photos/seed/aeroworks-car-3/600/400' },
  {
    name: 'Ford Mustang',
    price: '$449/mo',
    image: 'https://picsum.photos/seed/aeroworks-car-4/600/400',
  },
  {
    name: 'Mercedes C-Class',
    price: '$529/mo',
    image: 'https://picsum.photos/seed/aeroworks-car-5/600/400',
  },
  {
    name: 'Audi Q7',
    price: '$679/mo',
    image: 'https://picsum.photos/seed/aeroworks-car-6/600/400',
  },
]

export function CarListings() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-text-dark">Best Vehicle Offers</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {cars.map((car) => (
            <div
              key={car.name}
              className="group overflow-hidden rounded-[2px] border border-border bg-white transition-shadow hover:shadow-lg"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={car.image}
                  alt={car.name}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
              </div>
              <div className="p-5">
                <h3 className="mb-1 text-lg font-bold text-text-dark">{car.name}</h3>
                <p className="text-primary-500 font-bold">{car.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
