import { useState } from 'react'
import { Check } from 'lucide-react'
import { ButtonLink, cn } from '@free-react-templates/ui'
import { SectionTitle } from './SectionTitle'

interface Plan {
  tier: string
  price: string
  period: string
  features: string[]
}

const FEATURES = [
  'Free site building tools',
  'Free domain registration',
  'Free marketing tools',
  '99.9% service uptime',
  '30-day money back',
]

const MONTHLY: Plan[] = [
  {
    tier: 'Started',
    price: '$15.90',
    period: '/ month',
    features: ['2.5 GB web space', ...FEATURES],
  },
  {
    tier: 'Business',
    price: '$25.90',
    period: '/ month',
    features: ['90 GB web space', ...FEATURES],
  },
  {
    tier: 'Premium',
    price: '$35.90',
    period: '/ month',
    features: ['150 GB web space', ...FEATURES],
  },
  {
    tier: 'Dedicated',
    price: '$45.90',
    period: '/ month',
    features: ['250 GB web space', ...FEATURES],
  },
]

const YEARLY: Plan[] = [
  { tier: 'Started', price: '$150', period: '/ year', features: ['30 GB web space', ...FEATURES] },
  {
    tier: 'Business',
    price: '$250',
    period: '/ year',
    features: ['300 GB web space', ...FEATURES],
  },
  { tier: 'Premium', price: '$350', period: '/ year', features: ['500 GB web space', ...FEATURES] },
  { tier: 'Dedicated', price: '$450', period: '/ year', features: ['1 TB web space', ...FEATURES] },
]

const PERIODS = ['monthly', 'yearly'] as const

type Period = (typeof PERIODS)[number]

const LABELS: Record<Period, string> = { monthly: 'Monthly', yearly: 'Yearly' }

export function Pricing() {
  const [period, setPeriod] = useState<Period>('monthly')
  const plans = period === 'monthly' ? MONTHLY : YEARLY

  return (
    <section id="pricing" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-center justify-between gap-8 lg:flex-row lg:items-end">
          <SectionTitle align="left" className="mb-0">
            Choose your plan
          </SectionTitle>

          <div
            role="radiogroup"
            aria-label="Billing period"
            className="mb-16 flex h-[52px] w-[266px] items-center rounded-full border border-brand p-1"
          >
            {PERIODS.map((option) => (
              <label
                key={option}
                className={cn(
                  'flex h-full flex-1 cursor-pointer items-center justify-center rounded-full text-[15px] font-bold uppercase text-[#444] transition-colors',
                  option === period && 'bg-brand text-white',
                )}
              >
                <input
                  type="radio"
                  name="billing"
                  value={option}
                  checked={option === period}
                  onChange={() => setPeriod(option)}
                  className="sr-only"
                />
                {LABELS[option]}
              </label>
            ))}
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan) => (
            <article
              key={plan.tier}
              className="group bg-white px-5 pb-5 pt-6 shadow-[0_0_10px_rgba(18,8,81,0.1)] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(18,8,81,0.2)]"
            >
              <h3 className="text-lg font-bold uppercase text-[#111]">{plan.tier}</h3>
              <p className="-mx-8 mt-4 rounded-[10px] bg-navy py-6 text-center text-xl font-bold text-white transition-colors group-hover:bg-brand">
                {plan.price} <span className="text-base font-normal">{plan.period}</span>
              </p>
              <ul className="mt-4">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm leading-10 text-[#444]"
                  >
                    <Check className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
              <ButtonLink
                href="#choose-plan"
                className="mt-6 w-full rounded-full bg-[#f2f2f2] px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-[#111] transition-colors group-hover:bg-brand group-hover:text-white hover:bg-brand hover:text-white"
              >
                Choose plan
              </ButtonLink>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
