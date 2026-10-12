import { useState, type KeyboardEvent } from 'react'
import { Rocket } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { PLANS } from '../lib/site'
import { PillButton } from './Pill'
import { SectionTitle } from './SectionTitle'

type Period = 'monthly' | 'yearly'

const LABEL: Record<Period, string> = { monthly: 'Monthly', yearly: 'Yearly' }
const CORNER: Record<Period, string> = { monthly: 'rounded-l-pill', yearly: 'rounded-r-pill' }
const ARROW_MOVE: Record<string, Period> = { ArrowLeft: 'monthly', ArrowRight: 'yearly' }
const PERIODS: Period[] = ['monthly', 'yearly']

/**
 * The pricing block: the `pricing` pink plan card (peach rocket medallion, 35px
 * black-weight price over a white rule, a four-row white list and a white pill)
 * beside a copy column whose Monthly/Yearly pill pair swaps the card's billing
 * period, price and name through a real tab interface.
 */
export function Pricing() {
  const [period, setPeriod] = useState<Period>('monthly')
  const plan = PLANS[period]

  function onTabKeyDown(event: KeyboardEvent<HTMLButtonElement>) {
    const next = ARROW_MOVE[event.key]

    if (!next) return

    event.preventDefault()
    setPeriod(next)
  }

  return (
    <section
      id="pricing"
      aria-label="Plans and pricing"
      className="pt-[65px] pb-[10px] min-[768px]:pt-[100px] min-[768px]:pb-[40px] min-[992px]:pt-[150px] min-[992px]:pb-[90px] min-[1200px]:pt-[195px] min-[1200px]:pb-[140px]"
    >
      <div className="mx-auto flex w-full max-w-[1140px] flex-wrap items-center px-[15px]">
        <div className="mb-[60px] w-full lg:mb-0 lg:w-1/2">
          <div
            id="plan-panel"
            role="tabpanel"
            aria-labelledby={`tab-${period}`}
            className="relative mx-auto w-full max-w-[342px] overflow-hidden bg-pricing px-[23px] py-[45px] text-center min-[1200px]:px-[73px] min-[1200px]:py-[78px]"
          >
            <span
              aria-hidden="true"
              className="absolute bottom-0 left-0 h-[92px] w-[92px] rounded-tr-full bg-white/10"
            />
            <span
              aria-hidden="true"
              className="absolute top-0 right-0 h-[72px] w-[72px] rounded-bl-full bg-white/10"
            />

            <div className="mx-auto grid h-[100px] w-[100px] place-items-center rounded-full bg-peach">
              <Rocket aria-hidden="true" className="h-[46px] w-[46px] text-brand" />
            </div>

            <h3 className="mt-[24px] mb-[10px] font-body text-[20px] font-semibold text-white">
              {plan.name}
            </h3>
            <p className="mt-[30px] mb-[30px] border-b border-white pb-[30px] font-body text-[35px] leading-none font-black text-white">
              {plan.price}
            </p>
            <p className="text-[15px] font-light text-white">{plan.period}</p>

            <ul className="my-[19px]">
              {plan.features.map((feature) => (
                <li key={feature} className="my-[19px] text-[16px] font-light text-white">
                  {feature}
                </li>
              ))}
            </ul>

            <PillButton variant="white">Get the plan</PillButton>
          </div>
        </div>

        <div className="w-full lg:w-1/2 lg:pl-[40px]">
          <SectionTitle
            eyebrow="Simple pricing"
            title="Pricing that scales with you"
            align="left"
            className="mb-[30px]"
          />

          <p className="text-[16px] leading-[1.8] text-muted">
            One price covers the panel, the snapshots, the staging copy and the people who answer
            the phone. There is no setup fee and no contract to unwind.
          </p>
          <p className="mt-[20px] text-[16px] leading-[1.8] text-muted">
            Pay monthly, or take a year and keep two months back. Either way the plan switches the
            moment you ask.
          </p>

          <div
            role="tablist"
            aria-label="Billing period"
            className="mt-[31px] mb-[31px] flex justify-start"
          >
            {PERIODS.map((key) => (
              <button
                key={key}
                id={`tab-${key}`}
                type="button"
                role="tab"
                aria-selected={period === key}
                aria-controls="plan-panel"
                tabIndex={period === key ? 0 : -1}
                onClick={() => setPeriod(key)}
                onKeyDown={onTabKeyDown}
                className={cn(
                  'px-[43px] py-[15px] font-heading text-[16px] uppercase transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand',
                  CORNER[key],
                  period === key ? 'bg-pricing text-white' : 'bg-peach text-navy',
                )}
              >
                {LABEL[key]}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
