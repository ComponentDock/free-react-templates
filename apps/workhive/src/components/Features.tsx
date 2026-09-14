import { CheckCircle } from 'lucide-react'

const features = [
  {
    title: 'Money Saver',
    description: 'Flexible pricing plans that fit your budget without compromising on quality.',
  },
  {
    title: 'Locker and Key',
    description: 'Secure personal storage for your belongings with 24/7 access.',
  },
  {
    title: 'Active Listening',
    description: 'A supportive community that values collaboration and open communication.',
  },
  {
    title: 'Space for Events',
    description: 'Dedicated venues for workshops, meetups, and corporate events.',
  },
] as const

export function Features() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold text-ink sm:text-4xl font-display">
            Make the customer the hero of your story
          </h2>
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Features
          </span>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div key={feature.title} className="rounded-lg bg-peach p-6 text-center">
              <CheckCircle className="mx-auto mb-4 h-12 w-12 text-primary" />
              <h3 className="mb-2 text-lg font-bold text-ink">{feature.title}</h3>
              <p className="text-sm text-body">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
