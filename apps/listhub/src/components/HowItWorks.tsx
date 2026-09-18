import { Search, Star, CalendarCheck } from 'lucide-react'
import type { ComponentType, SVGProps } from 'react'

interface Step {
  number: string
  title: string
  description: string
  Icon: ComponentType<SVGProps<SVGSVGElement>>
}

const steps: Step[] = [
  {
    number: '01',
    title: 'Find Businesses',
    description:
      'Discover and connect with great local businesses in your local neighborhood like dentists, hair stylists and more.',
    Icon: Search,
  },
  {
    number: '02',
    title: 'Review Listings',
    description:
      'Read reviews and ratings from other users to find the best businesses that match your needs and preferences.',
    Icon: Star,
  },
  {
    number: '03',
    title: 'Make a Reservation',
    description:
      'Book your appointment or reservation directly through our platform with just a few simple clicks.',
    Icon: CalendarCheck,
  },
]

export function HowItWorks() {
  return (
    <section className="bg-dark-bg py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <h2
            className="text-3xl font-bold text-white"
            style={{ fontFamily: 'var(--font-family-heading)' }}
          >
            How Listhub Works
          </h2>
          <p className="mt-2 text-gray-400">Explore Our Process</p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand/20">
                <span className="text-2xl font-bold text-brand">{step.number}</span>
              </div>
              <step.Icon className="mx-auto mb-3 h-8 w-8 text-brand" aria-hidden="true" />
              <h3 className="mb-2 text-lg font-semibold text-white">{step.title}</h3>
              <p className="text-sm leading-relaxed text-gray-400">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
