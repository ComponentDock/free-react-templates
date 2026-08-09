import { useState } from 'react'
import { ChevronLeft, ChevronRight, DoorOpen, Gauge, Star, Users } from 'lucide-react'
import { Button, ButtonLink } from '@free-react-templates/ui'

interface Car {
  name: string
  price: number
  specs: ReadonlyArray<{ label: string; value: string }>
}

const cars: readonly Car[] = [
  {
    name: 'Range Rover S64 Coupe',
    price: 250,
    specs: [
      { label: 'Doors', value: '4' },
      { label: 'Seats', value: '6' },
      { label: 'Transmission', value: 'Automatic' },
      { label: 'Minimum age', value: '21' },
    ],
  },
  {
    name: 'Mercedes-Benz C-Class',
    price: 190,
    specs: [
      { label: 'Doors', value: '4' },
      { label: 'Seats', value: '5' },
      { label: 'Transmission', value: 'Automatic' },
      { label: 'Minimum age', value: '21' },
    ],
  },
  {
    name: 'BMW 3 Series',
    price: 210,
    specs: [
      { label: 'Doors', value: '4' },
      { label: 'Seats', value: '5' },
      { label: 'Transmission', value: 'Automatic' },
      { label: 'Minimum age', value: '21' },
    ],
  },
]

const specIcons = {
  Doors: DoorOpen,
  Seats: Users,
  Transmission: Gauge,
} as const

export function Offer() {
  const [offset, setOffset] = useState(0)

  const next = () => setOffset((current) => (current + 1) % cars.length)
  const prev = () => setOffset((current) => (current - 1 + cars.length) % cars.length)

  const ordered = [...cars.slice(offset), ...cars.slice(0, offset)]

  return (
    <section id="cars" className="bg-paper py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-3xl font-black text-ink">Our Offer</h2>
            <p className="mt-2 max-w-md text-mist">
              Far far away, behind the word mountains, far from the countries Vokalia and
              Consonantia, there live the blind texts.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" onClick={prev} aria-label="Previous cars">
              <ChevronLeft className="h-4 w-4" aria-hidden="true" />
              Previous
            </Button>
            <Button variant="outline" onClick={next} aria-label="Next cars">
              Next
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
            </Button>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {ordered.map((car) => (
            <article key={car.name} className="overflow-hidden rounded-xl bg-white shadow-sm">
              <div className="relative">
                <img
                  src={`https://picsum.photos/seed/drively-${car.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}/600/400`}
                  alt={car.name}
                  className="h-48 w-full object-cover"
                />
                <div className="absolute inset-x-0 top-0 flex items-center gap-1 bg-black/50 px-3 py-2 text-amber-400">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="h-4 w-4 fill-current" aria-hidden="true" />
                  ))}
                  <span className="ml-auto text-xs font-bold text-white">5.0</span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-black text-ink">{car.name}</h3>
                <ul className="mt-4 grid grid-cols-2 gap-3">
                  {car.specs.map((spec) => {
                    const Icon = specIcons[spec.label as keyof typeof specIcons] ?? Gauge
                    return (
                      <li key={spec.label} className="flex items-center gap-2 text-sm">
                        <Icon className="h-4 w-4 text-brand" aria-hidden="true" />
                        <span className="text-mist">{spec.label}:</span>
                        <span className="font-bold text-ink">{spec.value}</span>
                      </li>
                    )
                  })}
                </ul>
                <div className="mt-5 flex items-center justify-between gap-4">
                  <span className="text-xl font-black text-ink">
                    ${car.price}
                    <span className="text-sm font-semibold text-mist">/day</span>
                  </span>
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
