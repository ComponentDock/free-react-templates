import {
  ArrowRight,
  BarChart3,
  Bitcoin,
  BrainCircuit,
  CandlestickChart,
  DollarSign,
  LineChart,
  ShieldCheck,
  TrendingUp,
} from 'lucide-react'

const markets = [
  {
    title: 'Cryptocurrency',
    description: 'Trade Bitcoin, Ethereum, and 200+ altcoins with institutional-grade execution.',
    icon: Bitcoin,
  },
  {
    title: 'Stock Trading',
    description: 'Learn swing and position trading on US and international equities.',
    icon: CandlestickChart,
  },
  {
    title: 'Forex',
    description: 'Master the largest financial market with 24/5 sessions and deep liquidity.',
    icon: DollarSign,
  },
  {
    title: 'Options Trading',
    description: 'Use options to hedge risk, generate income, and trade volatility.',
    icon: LineChart,
  },
  {
    title: 'Prediction Markets',
    description: 'Trade event contracts on politics, economics, and global headlines.',
    icon: TrendingUp,
  },
  {
    title: 'Technical Analysis',
    description: 'Read charts, patterns, and indicators to time entries and exits.',
    icon: BarChart3,
  },
  {
    title: 'Risk Management',
    description:
      'Position sizing, stop-losses, and portfolio construction that survives drawdowns.',
    icon: ShieldCheck,
  },
  {
    title: 'Algorithmic Trading',
    description: 'Automate strategies with Python and backtest them on historical data.',
    icon: BrainCircuit,
  },
] as const

export function Markets() {
  return (
    <section id="markets" className="bg-gray-50 py-24 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl dark:text-white">
            Choose Your Market
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Eight markets, one structured curriculum. Pick the arena that fits your goals and learn
            it from professionals.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {markets.map((market) => (
            <div
              key={market.title}
              className="rounded-xl border border-gray-200 bg-white p-6 transition-colors hover:border-primary-300 dark:border-gray-800 dark:bg-gray-900 dark:hover:border-primary-700"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary-500/10 text-primary-600 dark:text-primary-400">
                <market.icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-display text-lg font-bold text-gray-900 dark:text-white">
                {market.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{market.description}</p>
              <a
                href="#courses"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary-600 transition-colors hover:text-primary-500 dark:text-primary-400"
              >
                Learn more
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
