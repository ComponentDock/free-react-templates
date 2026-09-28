import { ChevronRight } from 'lucide-react'

interface FoodCardProps {
  category: string
  name: string
  description: string
  imageSeed: string
  reversed?: boolean
}

function FoodCard({ category, name, description, imageSeed, reversed }: FoodCardProps) {
  return (
    <div className={`flex flex-col gap-0 ${reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
      <div
        className="h-64 bg-cover bg-center lg:h-80 lg:w-1/2"
        style={{ backgroundImage: `url(https://picsum.photos/seed/${imageSeed}/800/600)` }}
      />
      <div
        className={`flex flex-col justify-center px-8 py-6 lg:w-1/2 ${reversed ? 'items-start text-left' : 'items-end text-right'}`}
      >
        <span className="mb-1 text-xs font-semibold uppercase tracking-wider text-muted">
          {category}
        </span>
        <h3
          className="mb-3 text-2xl font-bold text-charcoal"
          style={{ fontFamily: 'var(--font-playfair)' }}
        >
          {name}
        </h3>
        <p className="mb-4 max-w-sm text-sm leading-relaxed text-body-text">{description}</p>
        <a
          href="#"
          className="inline-flex items-center gap-1 text-sm font-semibold text-charcoal hover:text-coral"
        >
          Learn More <ChevronRight size={14} />
        </a>
      </div>
    </div>
  )
}

const FOOD_ITEMS = [
  {
    category: 'Vegies',
    name: 'Beef Empanadas',
    description:
      'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
    imageSeed: 'supper-food1',
    reversed: false,
  },
  {
    category: 'Food',
    name: 'Buttermilk Chicken Jibaritos',
    description:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
    imageSeed: 'supper-food2',
    reversed: true,
  },
  {
    category: 'Food',
    name: 'Chicken Chimichurri Croquettes',
    description:
      'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.',
    imageSeed: 'supper-food3',
    reversed: false,
  },
]

export function Features() {
  return (
    <section className="bg-light-bg py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <h2
            className="mb-3 text-3xl font-bold text-charcoal"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Find your best food
          </h2>
        </div>
        <div className="flex flex-col gap-0">
          {FOOD_ITEMS.map((item) => (
            <FoodCard key={item.name} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}
