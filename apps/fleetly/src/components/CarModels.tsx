import { useState } from 'react'
import { carModels } from '../data'

export function CarModels() {
  const [current, setCurrent] = useState(0)

  return (
    <section id="cars" aria-label="Car models" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <p className="text-center text-sm tracking-wider text-text-light uppercase">
          {carModels.heading}
        </p>

        <div className="mt-12">
          {/* Desktop: show all 3 side by side */}
          <div className="hidden gap-8 md:grid md:grid-cols-3" aria-label="Car models desktop">
            {carModels.cars.map((car) => (
              <CarCard key={car.name} car={car} />
            ))}
          </div>

          {/* Mobile: carousel */}
          <div className="md:hidden" aria-label="Car models carousel">
            <CarCard car={carModels.cars[current]!} />
            <div className="mt-6 flex justify-center gap-2">
              {carModels.cars.map((car, index) => (
                <button
                  key={car.name}
                  type="button"
                  onClick={() => setCurrent(index)}
                  aria-label={`Go to car ${index + 1}`}
                  className={`h-3 w-3 rounded-full transition-colors ${
                    index === current ? 'bg-brand' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function CarCard({ car }: { car: (typeof carModels.cars)[number] }) {
  return (
    <article className="overflow-hidden rounded-[3px] border border-gray-100">
      <img src={car.image} alt={car.name} className="h-56 w-full object-cover" loading="lazy" />
      <div className="p-6">
        <h3 className="text-xl font-bold text-text">{car.name}</h3>
        <p className="mt-1 text-brand font-semibold">{car.price}</p>
        <p className="mt-3 text-sm leading-relaxed text-text-light">{car.description}</p>
        <ul className="mt-4 grid grid-cols-2 gap-2 text-xs text-text-light">
          <li>Capacity: {car.specs.capacity}</li>
          <li>Doors: {car.specs.doors}</li>
          <li>Air Condition: {car.specs.airCondition}</li>
          <li>Transmission: {car.specs.transmission}</li>
        </ul>
        <a
          href="#booking"
          className="mt-6 inline-block rounded-[3px] bg-brand px-8 py-3 text-sm font-medium text-white uppercase transition-colors hover:bg-brand-dark"
        >
          Book This Car Now
        </a>
      </div>
    </article>
  )
}
