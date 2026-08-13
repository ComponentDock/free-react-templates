import { cn } from '@free-react-templates/ui'

const plans = [
  {
    name: 'Free',
    price: 0,
    tagline: '100% free. Forever',
    features: [
      'Enjoy All The Features',
      '150 GB Bandwidth',
      '100 GB Storage',
      '$1.00 / GB Overages',
      'All features',
    ],
    active: false,
  },
  {
    name: 'Startup',
    price: 19,
    tagline: 'All features are included',
    features: ['450 GB Bandwidth', '400 GB Storage', '$2.00 / GB Overages', 'All features'],
    active: false,
  },
  {
    name: 'Premium',
    price: 49,
    tagline: 'All features are included',
    features: ['250 GB Bandwidth', '200 GB Storage', '$5.00 / GB Overages', 'All features'],
    active: true,
  },
  {
    name: 'Pro',
    price: 99,
    tagline: 'All features are included',
    features: ['450 GB Bandwidth', '400 GB Storage', '$20.00 / GB Overages', 'All features'],
    active: false,
  },
]

/** Blue section with four pricing cards; the Premium card is the green
 *  highlighted plan with a blue Choose Plan button. */
export function Pricing() {
  return (
    <section id="hosting" className="bg-primary-600 py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center text-white">
          <h2 className="text-3xl font-medium">Our Best Pricing</h2>
          <p className="mt-4 text-white/80">
            Even the all-powerful Pointing has no control about the blind texts it is an almost
            unorthographic.
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {plans.map(({ name, price, tagline, features, active }) => (
            <article
              key={name}
              className={cn(
                'flex flex-col rounded-lg p-8 text-center shadow-[0_15px_30px_-12px_rgba(0,0,0,0.2)]',
                active ? 'bg-accent-500' : name === 'Free' ? 'bg-mist-50' : 'bg-white',
              )}
            >
              <h3 className="text-sm font-medium tracking-[2px] text-primary-600 uppercase">
                {name}
              </h3>
              <p className="mt-4">
                <sup className="top-[-0.4em] text-3xl text-black">$</sup>
                <span className="text-[50px] font-normal text-black">
                  {price}
                  <small className="text-xs">/mo</small>
                </span>
              </p>
              <p className={cn('mt-3 text-sm', active ? 'text-black' : 'text-gray-400')}>
                {tagline}
              </p>
              <ul className="mt-6 mb-8 flex-1 space-y-2.5 text-sm">
                {features.map((feature) => (
                  <li key={feature} className={cn(active && 'text-black/80')}>
                    <strong className="font-semibold text-black">{feature}</strong>
                  </li>
                ))}
              </ul>
              <button
                type="button"
                className={cn(
                  'rounded-[5px] px-4 py-3 text-sm font-medium text-white transition-colors',
                  active
                    ? 'bg-primary-600 hover:bg-primary-700'
                    : 'bg-accent-500 hover:bg-accent-600',
                )}
              >
                Choose Plan
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
