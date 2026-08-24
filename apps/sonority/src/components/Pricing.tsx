import { Check } from 'lucide-react'

const FREE_FEATURES = ['Online listening', 'Regular audio', 'With advertising', '30 skips per day']

const PREMIUM_FEATURES = [
  'Offline listening',
  'High quality audio',
  'No advertising',
  'Unlimited skips',
]

export function Pricing() {
  return (
    <section id="pricing" className="bg-brand-section py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-brand-dark md:text-4xl">
            Listen free or subscribe to
            <br />
            Sonority Premium.
          </h2>
          <p className="mx-auto max-w-2xl text-brand-body">
            Sonority is a seamless integration that gives you the power to stream music — and get
            all the benefits you can&apos;t with just traditional music apps.
          </p>
        </div>
        <div className="mx-auto flex max-w-3xl flex-col gap-8 md:flex-row">
          <PricingCard
            name="Sonority Free"
            price="$0.00"
            features={FREE_FEATURES}
            buttonText="Get Free"
            highlighted={false}
          />
          <PricingCard
            name="Sonority Premium"
            price="$9.99"
            features={PREMIUM_FEATURES}
            buttonText="Get Premium"
            highlighted={true}
          />
        </div>
      </div>
    </section>
  )
}

interface PricingCardProps {
  name: string
  price: string
  features: string[]
  buttonText: string
  highlighted: boolean
}

function PricingCard({ name, price, features, buttonText, highlighted }: PricingCardProps) {
  return (
    <div
      className={`group flex-1 rounded-lg border p-8 transition-all duration-300 ${
        highlighted ? 'border-brand-blue bg-white shadow-lg' : 'border-brand-card-border bg-white'
      } hover:bg-brand-dark hover:text-white`}
    >
      <p className="mb-2 text-sm font-medium uppercase tracking-wide text-brand-body group-hover:text-white/70">
        {name}
      </p>
      <div className="mb-6 flex items-baseline gap-1">
        <span className="text-4xl font-bold text-brand-dark group-hover:text-white">{price}</span>
        <span className="text-brand-body group-hover:text-white/70">/month</span>
      </div>
      <ul className="mb-8 space-y-3">
        {features.map((feature) => (
          <li key={feature} className="flex items-center gap-3">
            <Check size={16} className="shrink-0 text-brand-blue" />
            <span className="text-brand-body group-hover:text-white/80">{feature}</span>
          </li>
        ))}
      </ul>
      <a
        href="#download"
        className={`block rounded-full py-3 text-center text-sm font-semibold uppercase transition-all ${
          highlighted
            ? 'bg-gradient-to-r from-[#ca42f2] via-[#6a42f2] to-brand-blue text-white hover:opacity-90'
            : 'border border-brand-card-border text-brand-dark group-hover:border-white/30 group-hover:text-white'
        }`}
      >
        {buttonText}
      </a>
    </div>
  )
}
