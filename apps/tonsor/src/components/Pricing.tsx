import { Check } from 'lucide-react'
import { ButtonLink, cn } from '@free-react-templates/ui'

const tiers = [
  {
    name: 'Basic',
    price: '$79.00',
    items: [
      'Basic Hair Cut',
      'Basic Shave',
      'Basic Head Wash',
      'Basic Body Massage',
      'Basic Snacks',
    ],
  },
  {
    name: 'Premium',
    price: '$89.00',
    items: [
      'Premium Hair Cut',
      'Premium Shave',
      'Premium Head Wash',
      'Premium Body Massage',
      'Premium Snacks',
    ],
  },
  {
    name: 'Luxury',
    price: '$99.00',
    items: [
      'Luxury Hair Cut',
      'Luxury Shave',
      'Luxury Head Wash',
      'Luxury Body Massage',
      'Luxury Snacks',
    ],
  },
] as const

export function Pricing() {
  return (
    <section id="pricing" className="bg-white py-24 dark:bg-gray-950 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold text-ink dark:text-white sm:text-4xl">
            Choose Your Package
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm font-light leading-relaxed text-mist">
            Transparent pricing, no hidden extras. Pick the package that fits your grooming routine
            and book your chair today.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {tiers.map((tier) => {
            const active = tier.name === 'Premium'
            return (
              <div
                key={tier.name}
                data-active={active ? 'true' : undefined}
                className={cn(
                  'group flex flex-col rounded-md bg-fog px-8 py-10 text-center shadow-sm transition-colors',
                  active ? 'bg-night text-white shadow-xl' : 'hover:bg-night hover:text-white',
                )}
              >
                <h3 className="font-display text-2xl font-semibold">{tier.name}</h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-mist transition-colors group-hover:text-white/60">
                  Standard Package
                </p>
                <p className="mt-6 border-t border-dashed border-gray-300 pt-6 text-4xl font-bold text-ink transition-colors group-hover:text-white dark:border-gray-700 dark:text-white">
                  {tier.price}
                </p>
                <ul className="mt-8 space-y-3 text-sm text-ink/70 transition-colors group-hover:text-white/80 dark:text-white/70">
                  {tier.items.map((item) => (
                    <li key={item} className="flex items-center justify-center gap-2">
                      <Check className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-10">
                  <ButtonLink
                    href="#contact"
                    className={cn(
                      'w-full rounded-full text-xs font-semibold uppercase tracking-[0.2em]',
                      active
                        ? 'bg-gradient-to-r from-brand to-gold text-white hover:from-gold hover:to-brand'
                        : 'bg-ink text-white hover:bg-gradient-to-r hover:from-brand hover:to-gold',
                    )}
                  >
                    Order Now
                  </ButtonLink>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
