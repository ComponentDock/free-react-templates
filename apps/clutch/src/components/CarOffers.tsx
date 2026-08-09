import { useState } from 'react'
import { Badge, ButtonLink, cn } from '@free-react-templates/ui'

const filters = ['Most Researched', 'Latest on sale'] as const

const cars = [
  {
    name: 'Porsche Cayenne Turbo S',
    year: '2019',
    price: '$35,000',
    monthly: '$700',
    tag: 'For Rent',
  },
  { name: 'Audi e-tron', year: '2020', price: '$38,500', monthly: '$750', tag: 'For Sale' },
  { name: 'BMW M5', year: '2019', price: '$32,000', monthly: '$650', tag: 'For Rent' },
  { name: 'Mercedes-AMG C63', year: '2018', price: '$28,900', monthly: '$600', tag: 'For Sale' },
  { name: 'Range Rover Sport', year: '2019', price: '$41,000', monthly: '$820', tag: 'For Rent' },
  { name: 'Ford Mustang GT', year: '2018', price: '$26,500', monthly: '$540', tag: 'For Sale' },
] as const

export function CarOffers() {
  const [active, setActive] = useState<(typeof filters)[number]>('Most Researched')

  return (
    <section id="cars" className="bg-white py-16 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">Our Car</p>
          <h2 className="mt-2 font-display text-3xl font-black text-ink dark:text-white">
            Best Vehicle Offers
          </h2>
          <div className="mt-6 inline-flex rounded-lg bg-paper p-1 dark:bg-gray-900">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActive(filter)}
                aria-pressed={active === filter}
                className={cn(
                  'rounded-md px-4 py-2 text-sm font-bold uppercase tracking-wide transition-colors',
                  active === filter
                    ? 'bg-brand text-white'
                    : 'text-ink hover:bg-gray-200 dark:text-white dark:hover:bg-gray-800',
                )}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cars.map((car, index) => (
            <article
              key={car.name}
              className="overflow-hidden rounded-xl bg-white shadow-sm dark:bg-gray-900"
            >
              <div className="relative">
                <img
                  src={`https://picsum.photos/seed/clutch-car-${index + 1}/600/400`}
                  alt=""
                  className="h-48 w-full object-cover"
                />
                <Badge className="absolute left-4 top-4 bg-brand text-white">{car.tag}</Badge>
                <span className="absolute right-4 top-4 rounded bg-white/90 px-2 py-1 text-xs font-bold text-ink dark:bg-gray-900 dark:text-white">
                  {car.year}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-black text-ink dark:text-white">
                  {car.name}
                </h3>
                <p className="mt-3 text-sm text-mist">
                  <span className="font-display text-xl font-black text-brand">{car.price}</span>{' '}
                  <span className="text-xs">or {car.monthly}/Month</span>
                </p>
                <div className="mt-5">
                  <ButtonLink href="#contact" className="w-full uppercase">
                    Rent Now
                  </ButtonLink>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
