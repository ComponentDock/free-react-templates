import { UtensilsCrossed, Coffee, Sandwich } from 'lucide-react'

const features = [
  {
    icon: UtensilsCrossed,
    title: 'Healthy Meal',
    description:
      'Making a reservation at Bonquet restaurant is easy and takes just a couple of minutes.',
  },
  {
    icon: Sandwich,
    title: 'Fast Food',
    description:
      'Making a reservation at Bonquet restaurant is easy and takes just a couple of minutes.',
  },
  {
    icon: Coffee,
    title: 'Delicious Coffee',
    description:
      'Making a reservation at Bonquet restaurant is easy and takes just a couple of minutes.',
  },
]

export function Features() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-display text-3xl font-bold text-warm-900 md:text-4xl">
            Best way to eat healthy food
          </h2>
          <p className="mx-auto max-w-xl text-base text-warm-900/60">
            Making a reservation at Bonquet restaurant is easy and takes just a couple of minutes.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="text-center">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-brand-50 text-brand-400">
                <f.icon size={36} />
              </div>
              <h3 className="mb-3 font-display text-xl font-medium text-warm-900">{f.title}</h3>
              <p className="text-sm leading-relaxed text-warm-900/60">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
