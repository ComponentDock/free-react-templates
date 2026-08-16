import { useState } from 'react'
import { Crown, Star, Zap } from 'lucide-react'
import { ButtonLink, cn } from '@free-react-templates/ui'
import { pricing, pricingPlans } from '../data'

const planIcons = [Zap, Star, Crown]

/* Pricing (source: section.pricing-card-area on the #F8FBFE band — centered
   heading, Yearly/Monthly pill tabs (active = navy), THREE cards per pane
   with an icon circle, plan name, price, four features and an ORANGE pill
   "Get Started" that turns pink-outline on hover). The demo shows the same
   card set in both panes; the recreation keeps that parity. */
export function Pricing() {
  const [activeTab, setActiveTab] = useState<'Yearly' | 'Monthly'>('Yearly')

  return (
    <section id="pricing" className="bg-band py-[120px]">
      <div className="mx-auto max-w-[1200px] px-[15px]">
        <div className="mb-[15px] text-center">
          <span className="mb-[18px] block text-[13px] font-medium uppercase tracking-[0.1em] text-brand">
            {pricing.kicker}
          </span>
          <h2 className="font-heading text-[36px] font-bold text-navy lg:text-[40px]">
            {pricing.heading}
          </h2>
        </div>

        {/* Pill tab control (source: div.nav-tabs — 1px black border). */}
        <div className="mb-12 flex justify-center">
          <div className="flex rounded-full border border-black">
            {pricing.tabs.map((tab) => (
              <button
                key={tab}
                type="button"
                aria-pressed={activeTab === tab}
                onClick={() => setActiveTab(tab)}
                className={cn(
                  'rounded-full px-[19px] py-[10px] font-heading text-[13px] font-semibold uppercase transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand',
                  activeTab === tab ? 'bg-navy text-white' : 'text-navy hover:text-brand',
                )}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Both panes hold the same card set (demo parity); the key makes
            the pane swap real when the active tab changes. */}
        <div key={activeTab} className="grid gap-8 lg:grid-cols-3">
          {pricingPlans.map((plan, index) => {
            const Icon = planIcons[index]!
            return (
              <article
                key={plan.name}
                className="group rounded-[5px] bg-white p-[35px_40px] text-center shadow-[0_10px_30px_0_rgba(0,0,0,0.05)] transition-all hover:shadow-[0_15px_30px_0_rgba(255,87,0,0.12)]"
              >
                <div className="mx-auto flex h-[78px] w-[78px] items-center justify-center rounded-full bg-white text-brand shadow-[0_10px_20px_0_rgba(255,68,149,0.2)]">
                  <Icon className="h-8 w-8" aria-hidden="true" />
                </div>
                <h3 className="mt-5 font-heading text-xl font-bold text-navy">{plan.name}</h3>
                <p className="mt-1 font-heading text-2xl font-bold text-navy">{plan.price}</p>
                <ul className="mt-5 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="text-base text-copy">
                      {feature}
                    </li>
                  ))}
                </ul>
                <ButtonLink
                  href="#contact"
                  className="mt-8 rounded-full border border-transparent bg-orange px-7 py-[11px] font-heading text-[15px] text-white transition-all group-hover:border-brand group-hover:bg-transparent group-hover:text-brand"
                >
                  {pricing.ctaLabel}
                </ButtonLink>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
