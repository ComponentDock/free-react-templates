import { Bell, Bot, Receipt, ShieldCheck, Target, TrendingUp, type LucideIcon } from 'lucide-react'

interface Feature {
  icon: LucideIcon
  title: string
  description: string
}

const features: Feature[] = [
  {
    icon: Bot,
    title: '24/7 AI Advisor',
    description:
      'Get instant answers and personalized financial advice anytime, day or night. Your AI advisor never sleeps.',
  },
  {
    icon: TrendingUp,
    title: 'Smart Portfolio Management',
    description:
      'Automatically rebalance and optimize your investments based on your risk tolerance and financial goals.',
  },
  {
    icon: Target,
    title: 'Goal-Based Planning',
    description:
      'Set any financial goal — a home, retirement, a dream vacation — and Finley builds a step-by-step plan to reach it.',
  },
  {
    icon: ShieldCheck,
    title: 'Bank-Level Security',
    description:
      'Your financial data is protected with 256-bit encryption, continuous monitoring, and bank-grade security protocols.',
  },
  {
    icon: Receipt,
    title: 'Tax Optimization',
    description:
      'Minimize your tax burden with smart strategies like tax-loss harvesting and Roth conversion opportunities.',
  },
  {
    icon: Bell,
    title: 'Proactive Alerts',
    description:
      'Stay informed with real-time alerts about market moves, spending anomalies, and new opportunities.',
  },
]

export function Features() {
  return (
    <section id="features" className="bg-gray-50 py-24 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400">
            Features
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Everything You Need to Build Wealth
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Powerful tools that work together to grow your money — automatically.
          </p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-lg dark:border-gray-800 dark:bg-gray-800"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-50 text-primary-600 dark:bg-primary-900/40 dark:text-primary-300">
                <feature.icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-display text-lg font-bold text-gray-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
