import { User, DollarSign, Search, Trophy } from 'lucide-react'

const steps = [
  {
    icon: User,
    title: 'Register',
    description:
      'Create your free account in seconds. Sign up with your email and start exploring thousands of items up for auction.',
  },
  {
    icon: DollarSign,
    title: 'Buy or Bid',
    description:
      'Browse our marketplace and find items you love. Place a bid or buy instantly at the listed price.',
  },
  {
    icon: Search,
    title: 'Submit a Bid',
    description:
      'Found something you want? Enter your bid amount and compete with other buyers for the best deal.',
  },
  {
    icon: Trophy,
    title: 'Win',
    description:
      'When the auction ends, the highest bidder wins. Complete payment and receive your item quickly.',
  },
] as const

export function HowItWorks() {
  return (
    <section id="how" className="py-16 sm:py-20" aria-label="How It Works">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12">
          <span className="text-sm font-bold uppercase tracking-wider text-primary-400">How?</span>
          <h2 className="mt-2 font-display text-3xl font-bold text-ink">
            How <span className="text-primary-400">It Works</span>
          </h2>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => {
            const Icon = step.icon
            return (
              <div key={step.title} className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-50">
                  <Icon className="h-8 w-8 text-primary-400" aria-hidden="true" />
                </div>
                <h3 className="font-display text-lg font-bold text-ink">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-smoke">{step.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
