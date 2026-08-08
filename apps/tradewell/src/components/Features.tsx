import {
  Award,
  Banknote,
  Code2,
  Landmark,
  PieChart,
  ShieldCheck,
  Smartphone,
  Zap,
} from 'lucide-react'

const features = [
  {
    icon: Banknote,
    title: 'Commission-Free Trading',
    description:
      'Buy and sell stocks, ETFs, and crypto with zero commission fees. Keep more of your returns.',
  },
  {
    icon: PieChart,
    title: 'Fractional Shares',
    description:
      'Invest in high-priced stocks with as little as $1. Build a diversified portfolio your way.',
  },
  {
    icon: Zap,
    title: 'Instant Deposits',
    description:
      'Fund your account instantly and start trading right away. No more waiting days for transfers.',
  },
  {
    icon: Award,
    title: 'Professional Research',
    description:
      'Access analyst ratings, market insights, and personalized recommendations to invest with confidence.',
  },
  {
    icon: Smartphone,
    title: 'Award-Winning App',
    description:
      'A beautiful, intuitive mobile experience rated 4.9/5 by over 50,000 investors worldwide.',
  },
  {
    icon: ShieldCheck,
    title: 'Bank-Level Security',
    description:
      'Your funds and data are protected with 256-bit encryption and SIPC insurance coverage.',
  },
  {
    icon: Code2,
    title: 'Developer API',
    description:
      'Build your own trading tools and algorithms with our powerful, well-documented public API.',
  },
  {
    icon: Landmark,
    title: 'Tax Optimization',
    description:
      'Smart tax-loss harvesting and retirement account options help you keep more of what you earn.',
  },
] as const

export function Features() {
  return (
    <section id="invest" className="bg-gray-50 py-20 lg:py-28 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-extrabold text-gray-900 sm:text-4xl dark:text-white">
            Everything You Need to{' '}
            <span className="text-primary-600 dark:text-primary-400">Invest Confidently</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Powerful tools and features designed to help you grow your wealth — all in one place.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-xl border border-gray-100 bg-white p-7 transition-shadow hover:shadow-lg dark:border-gray-800 dark:bg-gray-900"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-600 dark:bg-primary-950 dark:text-primary-400">
                <feature.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold text-gray-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
