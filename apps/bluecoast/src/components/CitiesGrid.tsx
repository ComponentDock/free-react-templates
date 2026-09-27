interface City {
  name: string
  price: string
  image: string
}

const cities: City[] = [
  {
    name: 'New York',
    price: '$1,200/month',
    image: 'https://picsum.photos/seed/bluecoast-c1/400/400',
  },
  {
    name: 'Los Angeles',
    price: '$1,500/month',
    image: 'https://picsum.photos/seed/bluecoast-c2/400/400',
  },
  {
    name: 'Chicago',
    price: '$900/month',
    image: 'https://picsum.photos/seed/bluecoast-c3/400/400',
  },
  {
    name: 'Miami',
    price: '$1,800/month',
    image: 'https://picsum.photos/seed/bluecoast-c4/400/400',
  },
  {
    name: 'San Francisco',
    price: '$2,100/month',
    image: 'https://picsum.photos/seed/bluecoast-c5/400/400',
  },
  {
    name: 'Seattle',
    price: '$1,600/month',
    image: 'https://picsum.photos/seed/bluecoast-c6/400/400',
  },
  {
    name: 'Boston',
    price: '$1,400/month',
    image: 'https://picsum.photos/seed/bluecoast-c7/400/400',
  },
  {
    name: 'Denver',
    price: '$1,100/month',
    image: 'https://picsum.photos/seed/bluecoast-c8/400/400',
  },
]

export function CitiesGrid() {
  return (
    <section className="bg-gray-50 py-20" aria-labelledby="cities-heading">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <h2 id="cities-heading" className="text-3xl font-bold text-text-dark">
            Find properties in these cities
          </h2>
          <p className="mt-2 text-text-gray">Search your dream home</p>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {cities.map((city) => (
            <a
              key={city.name}
              href="#"
              className="group relative block h-48 overflow-hidden rounded-lg"
            >
              <img
                src={city.image}
                alt={city.name}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 transition-colors group-hover:bg-black/60" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <h3 className="text-xl font-bold">{city.name}</h3>
                <p className="mt-1 text-sm text-white/80">Rentals from {city.price}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
