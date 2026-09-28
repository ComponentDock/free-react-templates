import { useState } from 'react'
import { ButtonLink } from '@free-react-templates/ui'

const slides = [
  {
    title: 'Fresh Seafood Platter',
    description:
      'An ocean-fresh selection of lobster, shrimp, and oysters served with our signature cocktail sauce and lemon wedges.',
    image: 'https://picsum.photos/seed/menu1/700/500',
  },
  {
    title: 'Garden Harvest Salad',
    description:
      'Locally sourced greens tossed with heirloom tomatoes, avocado, and a citrus vinaigrette for a light, refreshing bite.',
    image: 'https://picsum.photos/seed/menu2/700/500',
  },
] as const

export function Menus() {
  const [current, setCurrent] = useState(0)
  const slide = slides[current]!

  return (
    <section className="bg-paper py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-semibold uppercase tracking-wide text-ink sm:text-4xl">
            Featured Food Menus
          </h2>
          <p className="mx-auto max-w-2xl font-light text-mist">
            Handpicked selections from our kitchen that showcase the best of seasonal flavors and
            culinary creativity.
          </p>
        </div>

        <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-start lg:gap-16">
          <div className="flex-1">
            <h3 className="mb-4 text-2xl font-semibold text-ink">{slide.title}</h3>
            <p className="mb-8 max-w-md text-base font-light leading-relaxed text-mist">
              {slide.description}
            </p>
            <ButtonLink
              href="#contact"
              className="inline-flex items-center rounded-full bg-brand px-8 py-3 text-sm font-medium uppercase tracking-widest text-white transition-colors hover:bg-brand-dark"
            >
              Order Now
            </ButtonLink>
          </div>

          <div className="flex-1">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full rounded-sm object-cover shadow-md"
              loading="lazy"
            />
          </div>
        </div>

        <div className="mt-10 flex justify-center gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-3 w-3 rounded-full transition-colors ${
                i === current ? 'bg-brand' : 'bg-mist/30 hover:bg-mist/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
