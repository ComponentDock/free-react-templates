import { Cpu, HardDrive, Rocket, type LucideIcon } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'
import { Reveal } from './Reveal'

interface Plan {
  icon: LucideIcon
  name: string
  price: string
}

const PLANS: Plan[] = [
  { icon: HardDrive, name: 'Shared Hosting', price: 'Plans start at $3.99/month' },
  { icon: Cpu, name: 'Dedicated Hosting', price: 'Plans start at $6.99/month' },
  { icon: Rocket, name: 'Premium Hosting', price: 'Plans start at $9.99/month' },
]

/**
 * The light plan band: a centred question headline over three white cards, each
 * with a soft shadow, a hairline border, a 64px lime glyph, the plan name at
 * 24px/500, a muted price line and a lime action. Cards stagger in as they
 * reach the viewport (100 / 200 / 300 ms).
 */
export function PlanRow() {
  return (
    <section id="plans" className="bg-soft py-[48px] scroll-mt-[148px] min-[768px]:py-[112px] max-[992px]:scroll-mt-[75px]">
      <div className="mx-auto w-full max-w-[1140px] px-5">
        <Reveal className="mb-12">
          <h2 className="mx-auto max-w-[540px] text-center text-[32px] leading-[1.2] font-medium text-copy">
            Which rack fits the way you build?
          </h2>
        </Reveal>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {PLANS.map((plan, planIndex) => (
            <Reveal key={plan.name} delayMs={(planIndex + 1) * 100} className="h-full">
              <article className="h-full border border-line bg-surface py-12 text-center shadow-[0_5px_20px_-5px_rgba(0,0,0,0.2)]">
                <plan.icon aria-hidden="true" className="mx-auto h-16 w-16 text-lime" strokeWidth={1.25} />
                <h3 className="mt-4 text-[24px] font-medium text-ink">{plan.name}</h3>
                <p className="mt-2 mb-6 text-muted-alt">{plan.price}</p>
                <ButtonLink href="#contact" className="rounded-none h-[42px] px-6 text-[16px] font-normal">
                  View Details
                </ButtonLink>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
