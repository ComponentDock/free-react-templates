const vehicles = [
  {
    name: 'Mercedes Grand Sedan',
    price: '$45/day',
    image: 'highway-car-1',
    features: ['Automatic', '4 Seats', 'AC', 'GPS'],
  },
  {
    name: 'Toyota RAV4 SUV',
    price: '$60/day',
    image: 'highway-car-2',
    features: ['Automatic', '5 Seats', 'AC', 'GPS'],
  },
  {
    name: 'Honda Civic Hatch',
    price: '$35/day',
    image: 'highway-car-3',
    features: ['Manual', '4 Seats', 'AC', 'Bluetooth'],
  },
  {
    name: 'BMW 5 Series',
    price: '$80/day',
    image: 'highway-car-4',
    features: ['Automatic', '5 Seats', 'AC', 'GPS'],
  },
  {
    name: 'Ford Mustang Coupe',
    price: '$70/day',
    image: 'highway-car-5',
    features: ['Automatic', '4 Seats', 'AC', 'Sport Mode'],
  },
]

export function VehicleCarousel() {
  return (
    <section id="fleet" className="bg-surface py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="mb-12 text-center text-3xl font-bold text-heading">Choose Your Car</h2>
        <div className="flex gap-6 overflow-x-auto pb-4">
          {vehicles.map((v) => (
            <div key={v.name} className="min-w-[260px] flex-1 rounded-lg bg-white p-4 shadow-md">
              <img
                src={`https://picsum.photos/seed/${v.image}/400/250`}
                alt={v.name}
                className="mb-4 h-40 w-full rounded object-cover"
                loading="lazy"
              />
              <h3 className="mb-1 text-lg font-bold text-heading">{v.name}</h3>
              <p className="mb-3 text-sm font-semibold text-brand">{v.price}</p>
              <ul className="space-y-1 text-xs text-body">
                {v.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
