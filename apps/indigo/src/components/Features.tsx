import { Package, MousePointerClick, Headphones } from 'lucide-react'

const features = [
  {
    icon: Package,
    title: 'Unique Design',
    description:
      'Stand out with a clean, modern interface that puts your content first and keeps users engaged.',
  },
  {
    icon: MousePointerClick,
    title: 'Business Solution',
    description:
      'End-to-end tools built for growing teams — from project management to real-time analytics dashboards.',
  },
  {
    icon: Headphones,
    title: 'Customer Support',
    description:
      'Dedicated support around the clock so you never face a challenge alone, with response times under an hour.',
  },
]

export function Features() {
  return (
    <section id="features" className="my-16 sm:my-24 lg:my-32" data-testid="features">
      <div className="mx-auto max-w-7xl px-4">
        {/* Section intro */}
        <div className="mx-auto mb-12 max-w-2xl text-center lg:mb-20">
          <h2 className="font-display text-3xl font-bold text-heading sm:text-4xl">
            Awesome Soft Feature
          </h2>
          <p className="mt-3 text-base text-body">
            Powerful capabilities wrapped in an intuitive interface. Everything your team needs to
            ship faster and collaborate better.
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-lg bg-magnolia p-8 transition-shadow hover:shadow-lg"
            >
              <f.icon className="mb-3 h-8 w-8 text-primary" />
              <h3 className="font-display text-xl font-semibold text-heading">{f.title}</h3>
              <p className="mt-2 text-sm text-body">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
