import { ButtonLink } from '@free-react-templates/ui'

const cars = [
  {
    name: 'Mitsubishi Pajero',
    price: 389,
    image: 'drivego-car-1',
    luggage: '8',
    doors: '4',
    passenger: '4',
    description: 'Far far away, behind the word mountains, far from the countries Vokalia.',
  },
  {
    name: 'Nissan Moco',
    price: 389,
    image: 'drivego-car-2',
    luggage: '8',
    doors: '4',
    passenger: '4',
    description: 'Separated they live in Bookmarksgrove right at the coast of the Semantics.',
  },
  {
    name: 'Honda Fitta',
    price: 389,
    image: 'drivego-car-3',
    luggage: '8',
    doors: '4',
    passenger: '4',
    description:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
  },
  {
    name: 'Skoda Laura',
    price: 389,
    image: 'drivego-car-4',
    luggage: '8',
    doors: '4',
    passenger: '4',
    description: 'Far far away, behind the word mountains, far from the countries Vokalia.',
  },
  {
    name: 'Mazda LaPuta',
    price: 389,
    image: 'drivego-car-5',
    luggage: '8',
    doors: '4',
    passenger: '4',
    description: 'Separated they live in Bookmarksgrove right at the coast of the Semantics.',
  },
  {
    name: 'Buick LaCrosse',
    price: 389,
    image: 'drivego-car-6',
    luggage: '8',
    doors: '4',
    passenger: '4',
    description:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
  },
] as const

export function CarListings() {
  return (
    <section id="listing" className="bg-paper py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center font-display text-3xl font-black text-ink">Car Listings</h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cars.map((car) => (
            <article
              key={car.name}
              className="overflow-hidden rounded-xl bg-white shadow-sm"
              style={{ borderRadius: '7px' }}
            >
              <img
                src={`https://picsum.photos/seed/${car.image}/600/400`}
                alt={car.name}
                className="h-48 w-full object-cover"
              />
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-lg font-black text-ink">{car.name}</h3>
                  <span className="text-lg font-black text-brand">
                    ${car.price}
                    <span className="text-sm font-semibold text-mist">/day</span>
                  </span>
                </div>
                <ul className="mt-4 flex gap-4 text-sm">
                  <li className="flex items-center gap-1">
                    <span className="text-mist">Luggage:</span>
                    <span className="font-bold text-ink">{car.luggage}</span>
                  </li>
                  <li className="flex items-center gap-1">
                    <span className="text-mist">Doors:</span>
                    <span className="font-bold text-ink">{car.doors}</span>
                  </li>
                  <li className="flex items-center gap-1">
                    <span className="text-mist">Passenger:</span>
                    <span className="font-bold text-ink">{car.passenger}</span>
                  </li>
                </ul>
                <p className="mt-3 text-sm text-mist">{car.description}</p>
                <div className="mt-4">
                  <ButtonLink href="#contact">Rent Now</ButtonLink>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
