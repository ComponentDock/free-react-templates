import { Banknote, HandCoins, Lock, Users } from 'lucide-react'
import { SectionHeading } from './SectionHeading'

const features = [
  {
    title: 'No Downpayment',
    description: 'Pay nothing upfront — move in with a lease that protects your savings.',
    icon: HandCoins,
  },
  {
    title: 'All Cash Offer',
    description: 'Close fast with verified cash offers that sellers can trust.',
    icon: Banknote,
  },
  {
    title: 'Experts in Your Corner',
    description: 'Local agents negotiate every step so you never overpay.',
    icon: Users,
  },
  {
    title: 'Locked in Pricing',
    description: 'Transparent fees and locked rates from first visit to final keys.',
    icon: Lock,
  },
] as const

/**
 * WhyChooseUs — split section (source `.ftco-fullwidth`): photo half on the
 * left, four stacked feature rows on the right, each with a circular icon,
 * a title, and a short description.
 */
export function WhyChooseUs() {
  return (
    <section id="about" className="bg-white">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-20 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-28">
        <img
          src="https://picsum.photos/seed/keyhold-5/960/720"
          alt="Real estate agent showing a property to a couple"
          loading="lazy"
          className="h-full max-h-[560px] w-full rounded-[3px] object-cover"
        />

        <div>
          <SectionHeading subheading="Services" title="Why Choose Us?" align="left" />

          <div className="mt-10 space-y-8">
            {features.map((feature) => (
              <div key={feature.title} className="flex items-start gap-5">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-brand/15 text-brand">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-ink">{feature.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
