import { Check } from 'lucide-react'

interface Plan {
  key: string
  title: string
  price: string
  cents: string
  period: string
  features: string[]
}

const plans: Plan[] = [
  {
    key: 'beginner',
    title: 'beginner',
    price: 'Free',
    cents: '',
    period: 'Always',
    features: [
      '2 E-mail Addresses',
      '25 GB Space',
      '24h Live Support',
      'Documentation inside',
      'SEO Plan',
    ],
  },
  {
    key: 'recommended',
    title: 'recommended',
    price: '$29',
    cents: '.90',
    period: 'Per Month',
    features: [
      '2 E-mail Addresses',
      '25 GB Space',
      '24h Live Support',
      'Documentation inside',
      'SEO Plan',
    ],
  },
  {
    key: 'professional',
    title: 'professional',
    price: '$59',
    cents: '.90',
    period: 'Per Month',
    features: [
      '2 E-mail Addresses',
      '25 GB Space',
      '24h Live Support',
      'Documentation inside',
      'SEO Plan',
    ],
  },
] as const

const WAVE_PATH = 'M0,40 C240,60 480,20 720,40 C960,60 1200,20 1440,40 L1440,60 L0,60 Z'

export function Pricing() {
  return (
    <section id="pricing" aria-label="Pricing" className="bg-white pb-24">
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
        <h2 className="font-display text-4xl font-semibold text-navy-900">The package 4 you</h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-mist-400">
          Ipsum dolor sit amet, consectetur adipiscing elit. Mauris velit arcu, scelerisque
          dignissim massa quis, mattis facilisis erat.
        </p>

        <div className="mt-[104px] grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.key}
              className="group relative overflow-hidden rounded-[30px] border-2 border-[#f1f6f9] bg-white transition-all duration-300 hover:border-transparent hover:shadow-[0_21px_29px_rgba(0,0,0,0.41)]"
            >
              <div
                className="absolute inset-0 bg-gradient-to-b from-brand-400 to-brand-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                aria-hidden="true"
              />
              <div className="relative">
                <div className="relative h-[218px] overflow-hidden bg-gradient-to-b from-brand-400 to-brand-500">
                  <div className="pt-10 text-center">
                    <p className="text-sm font-semibold uppercase tracking-wider text-white">
                      {plan.title}
                    </p>
                    <p className="mt-3 font-display text-5xl font-medium text-white">
                      {plan.price}
                      {plan.cents && <span className="text-2xl">{plan.cents}</span>}
                    </p>
                    <p className="mt-2 text-sm text-white/85">{plan.period}</p>
                  </div>
                  <svg
                    className="absolute bottom-0 left-0 w-full"
                    viewBox="0 0 1440 60"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <defs>
                      <linearGradient id={`grad-${plan.key}`} x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#487fee" />
                        <stop offset="100%" stopColor="#b632fa" />
                      </linearGradient>
                    </defs>
                    <path d={WAVE_PATH} fill={`url(#grad-${plan.key})`} />
                  </svg>
                </div>

                <ul className="px-8 pb-2 pt-8">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 py-1.5 text-sm font-medium text-mist-400 transition-colors group-hover:text-white"
                    >
                      <Check
                        className="h-[13px] w-[13px] shrink-0 text-leaf-500 transition-colors group-hover:text-white"
                        aria-hidden="true"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="px-8 pb-10 pt-6 text-center">
                  <button
                    type="button"
                    className="h-[72px] w-full max-w-[193px] rounded-[36px] bg-white text-sm font-bold uppercase tracking-wide text-navy-900 transition-colors duration-300 group-hover:bg-sun-400 group-hover:text-white"
                  >
                    order plan
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="mx-auto mt-12 max-w-2xl text-sm leading-relaxed text-mist-400">
          Ipsum dolor sit amet, consectetur adipiscing elit. Mauris velit arcu, scelerisque
          dignissim massa quis, mattis facilisis erat. Aliquam erat volutpat.
        </p>
      </div>
    </section>
  )
}
