import { PenTool, BarChart3, Scissors, Lightbulb } from 'lucide-react'

const offers = [
  {
    icon: PenTool,
    title: 'Easy To Manage',
    description:
      'Intuitive dashboard with drag-and-drop controls makes managing your projects effortless.',
  },
  {
    icon: BarChart3,
    title: 'Analytics Tool',
    description:
      'Real-time analytics and reporting to track performance metrics across all your channels.',
  },
  {
    icon: Scissors,
    title: 'Professionals Tools',
    description:
      'Industry-standard tools for design, development, and deployment in one unified workspace.',
  },
  {
    icon: Lightbulb,
    title: 'Ready Content',
    description:
      'Pre-built templates and content blocks to launch your projects in minutes, not hours.',
  },
]

export function OfferFeatures() {
  return (
    <section className="my-16 sm:my-24 lg:my-32" data-testid="offer-features">
      <div className="mx-auto max-w-7xl px-4">
        {/* Section intro */}
        <div className="mx-auto mb-12 max-w-2xl text-center lg:mb-20">
          <h2 className="font-display text-3xl font-bold text-heading sm:text-4xl">
            Features We Offer
          </h2>
          <p className="mt-3 text-base text-body">
            Everything you need to build, launch, and grow — all in a single platform designed for
            modern teams.
          </p>
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* 2×2 grid */}
          <div className="grid grid-cols-2 gap-6">
            {offers.map((o) => (
              <div
                key={o.title}
                className="rounded-lg bg-magnolia p-6 transition-shadow hover:shadow-lg"
              >
                <o.icon className="mb-3 h-7 w-7 text-primary" />
                <h4 className="font-display text-lg font-semibold text-heading">{o.title}</h4>
                <p className="mt-2 text-sm text-body">{o.description}</p>
              </div>
            ))}
          </div>

          {/* Illustration */}
          <div className="flex justify-center">
            <img
              src="https://picsum.photos/seed/indigo-offer/520/400"
              alt="Features illustration"
              className="w-full max-w-md rounded-lg"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
