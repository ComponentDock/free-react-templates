import { BadgeDollarSign, KeyRound, ShieldCheck, UserCheck } from 'lucide-react'

const features = [
  {
    icon: ShieldCheck,
    title: 'Trusted Expertise',
    description: '15+ years of experience in luxury real estate with a proven track record.',
  },
  {
    icon: KeyRound,
    title: 'Exclusive Listings',
    description: 'Access to off-market properties and exclusive listings before they go public.',
  },
  {
    icon: UserCheck,
    title: 'Personal Service',
    description: 'Dedicated agents who understand your unique needs and preferences.',
  },
  {
    icon: BadgeDollarSign,
    title: 'Best Value',
    description: 'Expert negotiation to ensure you get the best possible deal.',
  },
] as const

export function WhyChoose() {
  return (
    <section id="why-choose" className="bg-gray-50 py-20 lg:py-28 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white">
            Why Choose Keyhaven
          </h2>
          <p className="mt-3 text-gray-600 dark:text-gray-400">
            We bring decades of experience and a personalized approach to every client.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div key={feature.title} className="text-center">
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-primary-100 text-primary-600 dark:bg-primary-900/30 dark:text-primary-400">
                <feature.icon className="h-7 w-7" aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-lg font-bold text-gray-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
