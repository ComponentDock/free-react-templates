import { Shield, Zap, ArrowLeftRight, Wallet } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

const features = [
  {
    icon: Zap,
    title: 'Fast & Easy',
    description:
      'Lightning-fast transactions with an intuitive interface that makes crypto accessible to everyone.',
  },
  {
    icon: Shield,
    title: 'No Strings Attached',
    description:
      'Transparent operations with no hidden fees or complicated terms. What you see is what you get.',
  },
  {
    icon: ArrowLeftRight,
    title: 'Small Commissions',
    description: 'Industry-leading low fees on every transaction. Keep more of what you earn.',
  },
  {
    icon: Wallet,
    title: '100% Secure',
    description: 'Bank-grade security protocols protect your assets around the clock.',
  },
] as const

export function Features() {
  return (
    <section id="features" className="bg-white py-20 dark:bg-navy-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="text-4xl font-light text-heading dark:text-white">
            Let's change <br />
            <span className="font-semibold text-gold-500">the world</span> together
          </h2>
          <p className="mt-4 text-muted">
            Discover how our platform is revolutionizing the way people interact with digital
            currencies.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-lg bg-surface p-8 text-center transition-colors hover:bg-navy-900 hover:text-white dark:bg-navy-900 dark:hover:bg-navy-800"
            >
              <feature.icon className="mx-auto mb-4 h-10 w-10 text-gold-500" />
              <h3 className="mb-3 text-lg font-semibold text-heading group-hover:text-white dark:text-white">
                {feature.title}
              </h3>
              <p className="mb-6 text-sm leading-relaxed text-muted group-hover:text-gray-300 dark:text-gray-400">
                {feature.description}
              </p>
              <ButtonLink href="#" variant="outline" size="sm">
                Read More
              </ButtonLink>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
