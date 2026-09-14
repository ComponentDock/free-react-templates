import { User, Shield, Phone, Rocket, Gem, MessageCircle } from 'lucide-react'

const features = [
  {
    title: 'Expert Support',
    blurb: '24/7 technical assistance from our robotics engineers.',
    icon: User,
  },
  {
    title: 'Secure Platform',
    blurb: 'Enterprise-grade encryption keeps your data and firmware safe.',
    icon: Shield,
  },
  { title: 'Easy Setup', blurb: 'Get your robot up and running in under 30 minutes.', icon: Phone },
  {
    title: 'Blazing Fast',
    blurb: 'Real-time control loops with sub-millisecond latency.',
    icon: Rocket,
  },
  {
    title: 'Premium Quality',
    blurb: 'Aerospace-grade aluminum and carbon fiber construction.',
    icon: Gem,
  },
  {
    title: 'Community',
    blurb: 'Join thousands of makers sharing projects and code.',
    icon: MessageCircle,
  },
]

export function Features() {
  return (
    <section id="features" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-heading sm:text-4xl">
            Why Choose Mechbot
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-body">
            Everything you need to build, learn, and innovate with robotics.
          </p>
        </div>
        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div key={feature.title} className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-light">
                  <Icon className="h-7 w-7 text-brand" aria-hidden="true" strokeWidth={1.5} />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-heading">{feature.title}</h3>
                <p className="mt-2 text-sm text-body">{feature.blurb}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
