import { ArrowRight, Play, ShieldCheck, Star, TrendingUp } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

const holdings = [
  { symbol: 'AAPL', name: 'Apple Inc.', value: '$8,412.30', change: '+1.39%' },
  { symbol: 'BTC', name: 'Bitcoin', value: '$12,048.50', change: '+2.28%' },
  { symbol: 'NVDA', name: 'NVIDIA Corp.', value: '$9,731.20', change: '+4.11%' },
  { symbol: 'SPY', name: 'S&P 500 ETF', value: '$17,190.54', change: '+0.72%' },
] as const

function PortfolioChart() {
  return (
    <svg
      viewBox="0 0 300 90"
      className="h-24 w-full text-primary-500"
      role="img"
      aria-label="Portfolio performance line chart"
    >
      <defs>
        <linearGradient id="chart-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.25" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M0 70 L30 62 L60 66 L90 48 L120 54 L150 40 L180 44 L210 28 L240 34 L270 18 L300 22 L300 90 L0 90 Z"
        fill="url(#chart-fill)"
      />
      <path
        d="M0 70 L30 62 L60 66 L90 48 L120 54 L150 40 L180 44 L210 28 L240 34 L270 18 L300 22"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gray-50 py-20 lg:py-28 dark:bg-gray-950"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-60 dark:opacity-20"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgb(15 23 42 / 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgb(15 23 42 / 0.04) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
        aria-hidden="true"
      />
      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-accent-100 px-4 py-1.5 text-sm font-semibold text-accent-700 dark:bg-accent-900/50 dark:text-accent-300">
            <ShieldCheck className="h-4 w-4" aria-hidden="true" />
            $0 Commission Trading
          </span>

          <h1 className="mt-6 font-display text-4xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl dark:text-white">
            Invest Smarter,{' '}
            <span className="text-primary-600 dark:text-primary-400">Trade Better</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-gray-600 dark:text-gray-400">
            The modern investment platform for stocks, ETFs, crypto, and options. Start with as
            little as $1 and build your wealth commission-free.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <ButtonLink
              href="#pricing"
              className="rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 px-8 py-3.5 font-semibold shadow-[0_4px_20px_-4px] shadow-primary-500/40 hover:from-primary-400 hover:to-primary-500"
            >
              Start Investing
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </ButtonLink>
            <ButtonLink
              href="#markets"
              variant="outline"
              className="rounded-xl px-8 py-3.5 font-semibold"
            >
              <Play className="h-4 w-4" aria-hidden="true" />
              Watch Demo
            </ButtonLink>
          </div>

          <div className="mt-10 flex items-center gap-4">
            <div className="flex -space-x-2">
              {[
                'from-primary-400 to-primary-600',
                'from-accent-400 to-accent-600',
                'from-amber-400 to-orange-500',
                'from-rose-400 to-rose-600',
                'from-violet-400 to-violet-600',
              ].map((gradient, index) => (
                <span
                  key={gradient}
                  className={`flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-gradient-to-br text-xs font-bold text-white dark:border-gray-950 ${gradient}`}
                >
                  {['JD', 'MK', 'AS', 'RB', 'TL'][index]}
                </span>
              ))}
            </div>
            <div>
              <div
                className="flex items-center gap-1 text-amber-400"
                aria-label="Rated 4.9 out of 5"
              >
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" aria-hidden="true" />
                ))}
              </div>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                <span className="font-semibold text-gray-900 dark:text-white">4.9/5</span> from 50K+
                reviews
              </p>
            </div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md" aria-label="Portfolio preview">
          <div className="rounded-[2.5rem] border-[10px] border-gray-900 bg-white shadow-2xl dark:border-gray-800 dark:bg-gray-900">
            <div className="flex items-center justify-between border-b border-gray-100 px-5 py-3 dark:border-gray-800">
              <div className="flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-primary-500 to-primary-600 text-white">
                  <TrendingUp className="h-4 w-4" aria-hidden="true" />
                </span>
                <span className="text-sm font-semibold text-gray-900 dark:text-white">
                  Portfolio
                </span>
              </div>
              <span className="rounded-full bg-accent-100 px-2.5 py-1 text-xs font-semibold text-accent-700 dark:bg-accent-900/50 dark:text-accent-300">
                +12.4% YTD
              </span>
            </div>
            <div className="px-5 py-4">
              <p className="text-xs text-gray-500 dark:text-gray-400">Total Balance</p>
              <p className="mt-1 font-mono text-3xl font-bold text-gray-900 dark:text-white">
                $47,382.54
              </p>
              <div className="mt-4">
                <PortfolioChart />
              </div>
              <ul className="mt-4 space-y-2.5">
                {holdings.map((holding) => (
                  <li key={holding.symbol} className="flex items-center justify-between text-sm">
                    <span className="flex items-center gap-2">
                      <span className="flex h-7 w-7 items-center justify-center rounded-md bg-gray-100 font-mono text-[10px] font-bold text-gray-900 dark:bg-gray-800 dark:text-white">
                        {holding.symbol}
                      </span>
                      <span className="font-medium text-gray-700 dark:text-gray-300">
                        {holding.name}
                      </span>
                    </span>
                    <span className="font-mono text-gray-900 dark:text-white">{holding.value}</span>
                    <span className="w-14 text-right font-mono text-accent-600 dark:text-accent-400">
                      {holding.change}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="absolute -left-4 top-16 hidden animate-float rounded-xl border border-gray-100 bg-white px-4 py-3 shadow-xl sm:block dark:border-gray-800 dark:bg-gray-900">
            <p className="text-xs font-semibold text-gray-900 dark:text-white">Order Filled</p>
            <p className="mt-0.5 font-mono text-xs text-gray-600 dark:text-gray-400">
              Bought 5 TSLA
            </p>
          </div>
          <div className="absolute -right-4 bottom-24 hidden animate-float-delayed rounded-xl border border-gray-100 bg-white px-4 py-3 shadow-xl sm:block dark:border-gray-800 dark:bg-gray-900">
            <p className="text-xs font-semibold text-gray-900 dark:text-white">Disbursed</p>
            <p className="mt-0.5 font-mono text-xs text-accent-600 dark:text-accent-400">
              $42.39 AAPL
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
