import { ButtonLink } from '@free-react-templates/ui'

interface Tier {
  name: string
  price: string
  features: string[]
}

const TIERS: Tier[] = [
  {
    name: 'Shared Hosting',
    price: '$2.95 / month',
    features: [
      '50 GB SSD storage',
      'unmetered bandwidth',
      'daily backups',
      'free domain for a year',
      '10 databases',
    ],
  },
  {
    name: 'Dedicated Hosting',
    price: '$89.99 / month',
    features: [
      '2 TB SSD storage',
      '8 dedicated CPU cores',
      'daily backups',
      'free domain for a year',
      'unlimited databases',
    ],
  },
  {
    name: 'Cloud Hosting',
    price: '$14.99 / month',
    features: [
      '200 GB SSD storage',
      'unmetered bandwidth',
      'hourly snapshots',
      'free domain for a year',
      'unlimited databases',
    ],
  },
]

/**
 * Pricing band: the plum shell continues behind the title while three white
 * tiers overlap it, each closed by an outline magenta pill button.
 */
export function Pricing() {
  return (
    <section id="pricing" className="relative bg-shell pt-4 pb-28">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-shell via-shell to-transparent"
      />
      <div className="relative mx-auto max-w-[1200px] px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
            Choose plan which fit for you
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            Three plans, one dashboard: start on shared hosting, move to a dedicated core or scale
            out on the cloud whenever your traffic asks for it.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {TIERS.map((tier) => (
            <article
              key={tier.name}
              className="bg-surface rounded-lg px-8 py-14 text-center shadow-[0_8px_26px_rgba(67,40,124,0.08)]"
            >
              <h4 className="font-heading text-xl font-semibold text-ink">{tier.name}</h4>
              <p className="font-heading mt-4 text-xs tracking-[0.2em] text-ink-kicker uppercase">
                Starting at
              </p>
              <p className="font-heading mt-3 border-b border-[#e7e6eb] pb-8 text-3xl font-bold text-accent-strong">
                {tier.price}
              </p>
              <ul className="mt-8 space-y-3 text-sm text-body-light">
                {tier.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <div className="mt-10">
                <ButtonLink
                  href="#pricing"
                  variant="outline"
                  className="font-heading rounded-[30px] border-accent bg-transparent px-12 py-3 text-xs font-semibold tracking-wide text-accent uppercase"
                >
                  Get Started
                </ButtonLink>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
