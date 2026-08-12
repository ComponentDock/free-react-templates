import { cn } from '@free-react-templates/ui'

/* Three pricing cards (source: .price_item — side cards get the solid
   #d8cafc header, the featured middle card the #dacafc → #9bccfc gradient
   plus drop shadow). Feature copy kept verbatim from the original. */
const PLANS = [
  {
    name: 'BASIC',
    price: '$00',
    featured: false,
  },
  {
    name: 'PREMIUM',
    price: '$50',
    featured: true,
  },
  {
    name: 'EXCLUSIVE',
    price: '$90',
    featured: false,
  },
]

const FEATURES = [
  'Free Useable',
  'Easily Can Useable 10GB',
  'Free Secuirity Service',
  'Dedicated Useable Account',
]

export function Pricing() {
  return (
    <section id="price" className="bg-periwinkle px-[15px] py-[100px]">
      <div className="mx-auto max-w-[1140px] text-center">
        <h2 className="font-display text-[30px] font-bold uppercase text-ink">Pricing Table</h2>
        <p className="mx-auto mt-4 max-w-[600px] text-[14px] text-body">
          Simple, transparent plans that grow with your app — start free and upgrade whenever you
          are ready.
        </p>
      </div>
      <div className="mx-auto mt-12 grid max-w-[1140px] grid-cols-1 gap-8 md:grid-cols-3">
        {PLANS.map((plan) => (
          <div
            key={plan.name}
            className={cn(
              'overflow-hidden bg-white pb-11 text-center',
              plan.featured && 'shadow-[0_0_20px_rgba(0,0,0,0.14)] pb-[60px]',
            )}
          >
            <div
              className={cn(
                'px-6 pt-8',
                plan.featured
                  ? 'bg-[linear-gradient(to_right,#dacafc,#9bccfc)]'
                  : 'bg-price-header',
              )}
            >
              <h3 className="mx-auto flex h-[35px] max-w-[155px] items-center justify-center rounded-[17.5px] bg-white px-4 font-display text-[18px] font-light text-ink">
                {plan.name}
              </h3>
              <h2 className="mt-4 font-display text-[50px] font-bold leading-none text-white">
                {plan.price}
              </h2>
              <h6 className="mt-1 pb-6 font-display text-[18px] font-light text-white">/month</h6>
            </div>
            <ul className="mt-8 space-y-3">
              {FEATURES.map((feature) => (
                <li key={feature} className="text-[14px] text-body">
                  {feature}
                </li>
              ))}
            </ul>
            <a
              href="#"
              className="mt-8 inline-flex h-[35px] items-center rounded-[17.5px] bg-[linear-gradient(to_right,#dacafc,#9bccfc)] px-7 text-[14px] font-medium uppercase tracking-[0.28px] text-white"
            >
              Purchase Now
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
