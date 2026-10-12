import { ButtonLink, Card } from '@free-react-templates/ui'
import { Cloud, Rocket, Server, type LucideIcon } from 'lucide-react'

interface Plan {
  id: string
  name: string
  price: string
  Icon: LucideIcon
  features: string[]
}

const PLANS: Plan[] = [
  {
    id: 'starter',
    name: 'Starter Hosting',
    price: '$4.67',
    Icon: Server,
    features: [
      '2 TB of SSD space',
      'Unmetered bandwidth',
      'Nightly off-site backups',
      'Free domain for a year',
      'Up to 25 databases',
    ],
  },
  {
    id: 'business',
    name: 'Business Hosting',
    price: '$9.42',
    Icon: Rocket,
    features: [
      '8 TB of SSD space',
      'Unmetered bandwidth',
      'Hourly off-site backups',
      'Free domain and SSL',
      'Up to 100 databases',
    ],
  },
  {
    id: 'cloud',
    name: 'Cloud Hosting',
    price: '$18.75',
    Icon: Cloud,
    features: [
      '20 TB of NVMe space',
      'Unmetered bandwidth',
      'Continuous backups',
      'Free domain, SSL and CDN',
      'Unlimited databases',
    ],
  },
]

/**
 * Three softly shadowed pricing cards that break out over the hero's scallop
 * divider via a negative top margin, each with a coral price, a five-item
 * feature list and an outline pill CTA that fills on hover.
 */
export function Pricing() {
  return (
    <section id="pricing" aria-label="Hosting plans" className="mt-0 sm:-mt-[78px] lg:-mt-[138px]">
      <div className="mx-auto max-w-[1140px] px-5">
        <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {PLANS.map(({ id, name, price, Icon, features }) => (
            <li key={id} className="group">
              <Card className="relative rounded-lg border-0 bg-surface p-0 text-center shadow-[0_8px_26px_rgba(67,40,124,0.08)]">
                <div className="px-[26px] pt-[70px]">
                  <Icon
                    aria-hidden="true"
                    className="mx-auto h-10 w-10 text-brand"
                    strokeWidth={1.5}
                  />
                  <h4 className="font-heading mt-6 text-[25px] font-semibold text-ink">{name}</h4>
                  <p className="mt-1 text-[15px] text-ink-muted">Starting at</p>
                </div>

                <div className="border-b border-line px-[26px] pt-4 pb-[26px]">
                  <h4 className="font-heading text-[32px] font-semibold text-coral">
                    {price}
                    <span className="text-xs font-normal text-copy-soft"> / month</span>
                  </h4>
                </div>

                <div className="px-[26px] pt-7 pb-[70px]">
                  <ul className="space-y-[23px]">
                    {features.map((feature) => (
                      <li key={feature} className="text-base font-light text-copy-muted">
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <ButtonLink
                    href="#contact"
                    variant="outline"
                    className="mt-8 rounded-full border-coral px-16 py-2.5 text-coral transition-colors group-hover:bg-brand group-hover:text-white"
                  >
                    Get Started
                  </ButtonLink>
                </div>
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
