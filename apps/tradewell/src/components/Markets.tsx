import { Bitcoin, Boxes, Briefcase, Coins, Landmark, LineChart } from 'lucide-react'

const markets = [
  {
    icon: LineChart,
    title: 'Stocks',
    description: 'Trade thousands of US and global stocks with real-time pricing.',
  },
  {
    icon: Boxes,
    title: 'ETFs',
    description: 'Diversify instantly with commission-free ETFs across every sector.',
  },
  {
    icon: Bitcoin,
    title: 'Crypto',
    description: 'Buy and sell Bitcoin, Ethereum, and 40+ other cryptocurrencies.',
  },
  {
    icon: Coins,
    title: 'Options',
    description: 'Advanced options trading with powerful strategy builders.',
  },
  {
    icon: Landmark,
    title: 'Bonds',
    description: 'Add stability to your portfolio with treasury and corporate bonds.',
  },
  {
    icon: Briefcase,
    title: 'Futures',
    description: 'Trade futures contracts across commodities, indices, and rates.',
  },
] as const

export function Markets() {
  return (
    <section id="markets" className="bg-white py-20 lg:py-28 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-extrabold text-gray-900 sm:text-4xl dark:text-white">
            Trade Multiple{' '}
            <span className="text-primary-600 dark:text-primary-400">Asset Classes</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            One account for everything. Diversify across all major markets from a single dashboard.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {markets.map((market) => (
            <div
              key={market.title}
              className="flex items-start gap-5 rounded-xl border border-gray-100 bg-white p-7 transition-shadow hover:shadow-lg dark:border-gray-800 dark:bg-gray-900"
            >
              <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-accent-100 text-accent-600 dark:bg-accent-900/40 dark:text-accent-400">
                <market.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-display text-lg font-bold text-gray-900 dark:text-white">
                  {market.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  {market.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
