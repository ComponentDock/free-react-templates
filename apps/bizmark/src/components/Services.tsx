import { TrendingUp, Wallet, ArrowRight } from 'lucide-react'

const serviceCards = [
  {
    icon: TrendingUp,
    title: 'Business Opportunity',
    description:
      'Show wherein form yielding whales readeat gathered wherein moved. Behold may be winged created that they are second god give.',
    hasAltStyle: false,
  },
  {
    icon: Wallet,
    title: 'Commercial Approach',
    description:
      'Show wherein form yielding whales readeat gathered wherein moved. Behold may be winged created that they are second god give.',
    hasAltStyle: true,
  },
]

export function Services() {
  return (
    <section className="bg-section-bg px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="max-w-md">
            <h2 className="mb-4 text-3xl font-bold text-heading sm:text-4xl">
              We Provide Best Services
            </h2>
            <p className="mb-6 leading-relaxed text-body">
              Male bring land dominion over can&apos;t yielding. His order moveth under of dry
              brought him is. Multiply which firmament deep make. Male bring land. Dominion over
              can&apos;t yielding.
            </p>
            <a href="#" className="gradient-btn">
              Load More
            </a>
          </div>

          {serviceCards.map((card) => {
            const Icon = card.icon
            return (
              <div
                key={card.title}
                className="rounded-xl bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
              >
                <div
                  className={`mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full border-2 ${
                    card.hasAltStyle
                      ? 'border-border-warm bg-green-accent'
                      : 'border-border-warm bg-white'
                  }`}
                >
                  <Icon size={24} className="text-brand-accent" />
                </div>
                <h4 className="mb-3 text-xl font-semibold text-heading">{card.title}</h4>
                <p className="mb-4 leading-relaxed text-body">{card.description}</p>
                <a
                  href="#"
                  className="inline-flex items-center gap-1 font-medium text-brand-accent transition-colors hover:text-brand-end"
                >
                  Learn More <ArrowRight size={16} />
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
