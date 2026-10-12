import { Button, cn } from '@free-react-templates/ui'
import { ArrowRight } from 'lucide-react'

interface Plan {
  name: string
  audience: string
  price: string
  blurb: string
  features: string[]
}

const PLANS: Plan[] = [
  {
    name: 'Starter',
    audience: 'For solo builders',
    price: '$19',
    blurb: 'A single site, daily backups and enough headroom for a side project.',
    features: [
      '2.5 GB managed storage',
      'Free transfer every month',
      'Unlimited layout styles',
      'Same-day support replies',
      'Manual backup on request',
    ],
  },
  {
    name: 'Studio',
    audience: 'For growing studios',
    price: '$39',
    blurb: 'Shared resources with room for a handful of marketing sites and shops.',
    features: [
      '25 GB managed storage',
      'Free transfer every month',
      'Unlimited layout styles',
      'Priority support replies',
      'Automated nightly backups',
    ],
  },
  {
    name: 'Scale',
    audience: 'For large product teams',
    price: '$75',
    blurb: 'Dedicated capacity with a named engineer and an uptime guarantee.',
    features: [
      '250 GB managed storage',
      'Free transfer every month',
      'Unlimited layout styles',
      'Named support engineer',
      'Off-site backup archive',
    ],
  },
]

/**
 * The pricing triple: three square-cornered soft-surface cards whose lower half
 * flips to solid brand blue with an offset shadow on hover or focus, inverting
 * the dark square button to white.
 */
export function PricingSection() {
  return (
    <section id="plan" className="scroll-mt-[108px] bg-surface py-[120px]">
      <div className="mx-auto max-w-[1140px] px-5">
        <div className="mx-auto max-w-[700px] text-center">
          <h1 className="font-heading mb-[10px] text-[36px] font-semibold text-ink">
            Choose the Plan That Fits Your Team
          </h1>
          <p className="text-copy">Three sizes of cloud, one predictable bill each month.</p>
        </div>

        <div className="mt-[60px] grid gap-6 lg:grid-cols-3">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className="group bg-surface-soft transition-all duration-300 focus-within:shadow-[0_20px_20px_0_rgba(157,157,157,0.5)] hover:shadow-[0_20px_20px_0_rgba(157,157,157,0.5)]"
            >
              <div className="flex items-start justify-between border-b border-line px-[40px] pt-[40px] pb-[22px]">
                <div>
                  <h4 className="font-heading text-[18px] font-semibold text-ink">{plan.name}</h4>
                  <p className="text-[14px] text-copy">{plan.audience}</p>
                </div>
                <h1 className="font-heading text-[36px] font-semibold text-ink">{plan.price}</h1>
              </div>

              <div className="border-b border-line px-[40px] pt-[40px] pb-[22px] transition-all duration-300 group-hover:bg-brand group-focus-within:bg-brand">
                <p className="text-[14px] text-copy transition-colors group-hover:text-white group-focus-within:text-white">
                  {plan.blurb}
                </p>
              </div>

              <div className="px-[40px] pt-[40px] pb-[22px] transition-all duration-300 group-hover:bg-brand group-focus-within:bg-brand">
                <ul className="text-[14px] text-copy">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="mb-[20px] transition-colors group-hover:text-white group-focus-within:text-white"
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  className={cn(
                    'inline-flex h-[42px] items-center gap-2 rounded-none bg-dark px-[30px] text-[12px] font-medium text-white uppercase',
                    'transition-colors group-hover:bg-surface group-hover:text-ink group-focus-within:bg-surface group-focus-within:text-ink',
                  )}
                >
                  Purchase Plan
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
