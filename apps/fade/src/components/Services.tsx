import { useState } from 'react'

const categories = ['All', 'Haircuts', 'Beard', 'Coloring', 'Kids'] as const

type Category = (typeof categories)[number]

interface Service {
  name: string
  duration: string
  blurb: string
  price: string
  category: Exclude<Category, 'All'>
}

const services: Service[] = [
  {
    name: 'Classic Haircut',
    duration: '30 min',
    blurb: 'Traditional scissor or clipper cut with hot lather neck shave.',
    price: '$35',
    category: 'Haircuts',
  },
  {
    name: 'Skin Fade',
    duration: '35 min',
    blurb: 'Precision skin fade blended to perfection with your preferred style on top.',
    price: '$40',
    category: 'Haircuts',
  },
  {
    name: 'Buzz Cut',
    duration: '20 min',
    blurb: 'Clean all-over clipper cut at your chosen length.',
    price: '$25',
    category: 'Haircuts',
  },
  {
    name: 'Long Hair Cut',
    duration: '40 min',
    blurb: 'Scissor cut and styling for longer hair, includes wash and blow dry.',
    price: '$45',
    category: 'Haircuts',
  },
  {
    name: 'Beard Trim',
    duration: '20 min',
    blurb: 'Shape and trim with hot towel and beard oil finish.',
    price: '$25',
    category: 'Beard',
  },
  {
    name: 'Hot Towel Shave',
    duration: '45 min',
    blurb: 'The classic straight razor shave with hot towel treatment and moisturizer.',
    price: '$45',
    category: 'Beard',
  },
  {
    name: 'Beard Design',
    duration: '30 min',
    blurb: 'Detailed beard sculpting and line-up with razor-sharp edges.',
    price: '$35',
    category: 'Beard',
  },
  {
    name: 'Grey Blending',
    duration: '40 min',
    blurb: 'Subtle color treatment to blend grey hairs for a natural, youthful look.',
    price: '$50',
    category: 'Coloring',
  },
  {
    name: 'Full Color',
    duration: '60 min',
    blurb: 'Complete hair color with ammonia-free products, includes cut and style.',
    price: '$75',
    category: 'Coloring',
  },
  {
    name: 'Kids Haircut (Under 12)',
    duration: '20 min',
    blurb: 'Patient, fun haircut for young gentlemen. Includes lollipop.',
    price: '$25',
    category: 'Kids',
  },
  {
    name: 'Teen Cut (12-17)',
    duration: '25 min',
    blurb: 'Trendy styles for teens, including fade and design options.',
    price: '$30',
    category: 'Kids',
  },
] as const

export function Services() {
  const [active, setActive] = useState<Category>('All')

  const visible = services.filter((service) => active === 'All' || service.category === active)

  return (
    <section id="services" className="bg-gray-50 py-20 lg:py-28 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent-600 dark:text-accent-400">
            Services
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Our Service Menu
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            From classic cuts to premium grooming, we offer a full range of barbershop services to
            keep you looking sharp.
          </p>
        </div>

        <div
          role="group"
          aria-label="Filter services by category"
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActive(category)}
              aria-pressed={active === category}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                active === category
                  ? 'bg-accent-500 text-gray-900'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((service) => (
            <article
              key={service.name}
              className="flex flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {service.name}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                    {service.duration}
                  </p>
                </div>
                <span className="text-lg font-bold text-accent-600 dark:text-accent-400">
                  {service.price}
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                {service.blurb}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
