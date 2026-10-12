import { ButtonLink } from '@free-react-templates/ui'
import { Check, X } from 'lucide-react'
import { Reveal } from './Reveal'

interface PlanRow {
  label: string
  included: boolean
}

interface Plan {
  name: string
  price: string
  /** Right-hand rule the column carries at each breakpoint. */
  rule: string
  rows: PlanRow[]
}

const PLANS: Plan[] = [
  {
    name: 'Starter',
    price: '9.90',
    rule: 'min-[576px]:border-r-2 min-[992px]:border-r-2',
    rows: [
      { label: '50 GB NVMe storage', included: true },
      { label: 'One sub-domain', included: true },
      { label: 'Five mailboxes', included: true },
      { label: 'Priority support', included: false },
      { label: 'Control panel access', included: false },
    ],
  },
  {
    name: 'Growth',
    price: '19.90',
    rule: 'min-[992px]:border-r-2',
    rows: [
      { label: '70 GB NVMe storage', included: true },
      { label: 'Three sub-domains', included: true },
      { label: 'Seven mailboxes', included: true },
      { label: 'Priority support', included: false },
      { label: 'Control panel access', included: false },
    ],
  },
  {
    name: 'Business',
    price: '39.90',
    rule: 'min-[576px]:border-r-2 min-[992px]:border-r-2',
    rows: [
      { label: '90 GB NVMe storage', included: true },
      { label: 'Five sub-domains', included: true },
      { label: 'Ten mailboxes', included: true },
      { label: 'Priority support', included: true },
      { label: 'Control panel access', included: false },
    ],
  },
  {
    name: 'Scale',
    price: '59.90',
    rule: '',
    rows: [
      { label: '120 GB NVMe storage', included: true },
      { label: 'Seven sub-domains', included: true },
      { label: 'Fifteen mailboxes', included: true },
      { label: 'Priority support', included: true },
      { label: 'Control panel access', included: true },
    ],
  },
]

/**
 * The pricing table: one 2 px-hazed container of four equal columns, each with a
 * 129 px violet header bar, a mint action and a five-row feature list. It
 * reflows to two columns (only the odd column keeps its rule) and then to a
 * single rule-less column.
 */
export function PricingTable() {
  return (
    <section id="plans" className="scroll-mt-[124px] bg-surface pt-[94px] pb-[98px]">
      <div className="mx-auto w-full max-w-[1140px] px-5">
        <Reveal>
          <h2 className="sr-only">Hosting plans</h2>
          <div className="flex flex-wrap overflow-hidden rounded-[12px] border-2 border-haze">
            {PLANS.map((plan) => (
              <div
                key={plan.name}
                className={`w-full border-haze text-center min-[576px]:w-1/2 min-[992px]:w-1/4 ${plan.rule}`}
              >
                <h3 className="h-[129px] bg-plum text-[30px] leading-[129px] font-bold text-white transition-colors max-[575px]:text-[24px]">
                  {plan.name}
                </h3>

                <div className="pt-[50px] pb-[37px]">
                  <p className="text-[36px] font-bold text-plum-mid max-[575px]:text-[30px]">
                    ${plan.price}
                    <span className="ml-1 inline-block translate-x-[-5px] translate-y-[12px] text-[14px] font-medium text-ink">
                      /month
                    </span>
                  </p>

                  <ul className="mt-[89px] flex flex-col items-center gap-[26px]">
                    {plan.rows.map((row) =>
                      row.included ? (
                        <li key={row.label} className="flex items-center justify-center">
                          <Check className="h-[18px] w-[18px] shrink-0 text-ink" aria-hidden="true" />
                          <span className="ml-[10px] text-[18px] font-semibold text-ink">
                            {row.label}
                          </span>
                        </li>
                      ) : (
                        <li key={row.label} className="flex items-center justify-center">
                          <X
                            className="h-[18px] w-[18px] shrink-0 text-body-copy"
                            aria-hidden="true"
                          />
                          <span className="ml-[10px] text-[16px] font-medium text-body-copy">
                            {row.label}
                          </span>
                        </li>
                      ),
                    )}
                  </ul>

                  <div className="mt-[75px] flex justify-center">
                    <ButtonLink
                      href="#contact"
                      aria-label={`Buy the ${plan.name} plan`}
                      className="h-[53px] w-[132px] rounded-[12px] bg-mint text-[16px] font-bold text-ink-on-mint hover:bg-plum-bright hover:text-white"
                    >
                      Buy now
                    </ButtonLink>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
