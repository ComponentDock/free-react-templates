import { Search, MapPin, Compass } from 'lucide-react'

interface Step {
  icon: React.ElementType
  title: string
  description: string
}

const steps: Step[] = [
  {
    icon: Search,
    title: 'Decide What To Do',
    description:
      'Think about what kind of experience you are looking for — dining, entertainment, relaxation, or adventure.',
  },
  {
    icon: MapPin,
    title: 'Find What You Want',
    description:
      'Use our search and category filters to discover the best places that match your preferences.',
  },
  {
    icon: Compass,
    title: 'Explore Amazing Places',
    description:
      'Head out and enjoy your chosen destination. Leave reviews to help others discover great spots too.',
  },
]

export function HowItWorks() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10 text-center">
          <h2 className="mb-2 text-3xl font-light text-primary-500">How It Works</h2>
          <p className="mx-auto max-w-lg text-gray-500">
            Finding great places has never been easier. Follow these three simple steps.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <div key={i} className="text-center">
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary-50">
                  <Icon size={36} className="text-primary-500" />
                </div>
                <span className="mb-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary-500 text-sm font-bold text-white">
                  {i + 1}
                </span>
                <h3 className="mb-2 text-lg font-semibold text-gray-800">{step.title}</h3>
                <p className="text-sm text-gray-500">{step.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
