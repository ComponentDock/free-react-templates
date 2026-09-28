import { Coffee, UtensilsCrossed, Moon, ChefHat } from 'lucide-react'

const features = [
  {
    title: 'Refreshing Breakfast',
    icon: Coffee,
    description: 'Start your day with our freshly brewed coffee and wholesome breakfast options.',
  },
  {
    title: 'Awesome Lunch',
    icon: UtensilsCrossed,
    description:
      'Midday meals crafted to refuel your energy with bold flavors and fresh ingredients.',
  },
  {
    title: 'Soothing Dinner',
    icon: Moon,
    description:
      'Wind down your evening with elegant dishes designed for the perfect dining experience.',
  },
  {
    title: 'Rich Quality Buffet',
    icon: ChefHat,
    description: 'An extensive spread of curated dishes for those who love variety and quality.',
  },
]

export function Features() {
  return (
    <section className="py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div key={feature.title} className="text-center">
              <feature.icon className="mx-auto mb-6 h-12 w-12 text-brand" aria-hidden="true" />
              <h3 className="mb-3 text-lg font-semibold text-ink">{feature.title}</h3>
              <p className="text-sm font-light leading-relaxed text-mist">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
