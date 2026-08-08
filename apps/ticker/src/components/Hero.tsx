import { ArrowRight, Star, TrendingUp } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

const avatars = [
  { name: 'Trader portrait', src: 'https://picsum.photos/seed/ticker-7/96/96' },
  { name: 'Trader portrait', src: 'https://picsum.photos/seed/ticker-8/96/96' },
  { name: 'Trader portrait', src: 'https://picsum.photos/seed/ticker-9/96/96' },
  { name: 'Trader portrait', src: 'https://picsum.photos/seed/ticker-10/96/96' },
]

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gray-50 pb-24 pt-32 lg:pb-32 lg:pt-40 dark:bg-gray-950"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-success-500/10 px-4 py-1.5 text-sm font-medium text-success-600 dark:text-success-400">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-success-500" />
            </span>
            1,247 traders online now
          </span>

          <h1 className="mt-6 font-display text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl dark:text-white">
            Learn to Trade from{' '}
            <span className="bg-gradient-to-br from-primary-500 to-primary-700 bg-clip-text text-transparent">
              Millionaire Mentors
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-gray-600 dark:text-gray-400">
            Learn to trade stocks, crypto, forex, and options from professional traders. Join
            50,000+ students building wealth through financial education.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <ButtonLink
              href="#pricing"
              className="bg-gradient-to-br from-primary-500 to-primary-600 px-8 py-4 text-base font-semibold text-white"
            >
              Start Trading
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </ButtonLink>
            <ButtonLink
              href="#mentors"
              variant="outline"
              className="bg-white px-8 py-4 text-base font-semibold text-gray-900 hover:border-gray-400 hover:bg-white dark:bg-gray-900 dark:text-white dark:hover:bg-gray-900"
            >
              Meet Our Mentors
            </ButtonLink>
          </div>

          <div className="mt-10 flex items-center gap-4">
            <div className="flex -space-x-3">
              {avatars.map((avatar) => (
                <img
                  key={avatar.src}
                  src={avatar.src}
                  alt={avatar.name}
                  loading="lazy"
                  className="h-11 w-11 rounded-full ring-2 ring-gray-50 dark:ring-gray-950"
                />
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1" aria-label="Rated 4.9 out of 5">
                {Array.from({ length: 5 }, (_, index) => (
                  <Star
                    key={index}
                    className="h-4 w-4 fill-amber-400 text-amber-400"
                    aria-hidden="true"
                  />
                ))}
                <span className="ml-1 font-semibold text-gray-900 dark:text-white">4.9/5</span>
              </div>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">from 2,847 traders</p>
            </div>
          </div>
        </div>

        <div>
          <div className="rounded-xl border border-gray-200 bg-white/80 p-6 shadow-xl backdrop-blur dark:border-gray-800 dark:bg-gray-900/50">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  Live Portfolio
                </p>
                <p className="mt-1 font-display text-2xl font-bold text-gray-900 dark:text-white">
                  Total Balance <span className="font-mono">$124,723.45</span>
                </p>
              </div>
              <span className="rounded-full bg-success-500/10 px-3 py-1 text-xs font-medium text-success-600 dark:text-success-400">
                +18.2% all time
              </span>
            </div>

            <svg viewBox="0 0 320 96" className="mt-6 h-24 w-full" aria-hidden="true" role="img">
              <defs>
                <linearGradient id="ticker-chart-fill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#1C985A" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#1C985A" stopOpacity="0" />
                </linearGradient>
              </defs>
              <polyline
                points="0,76 32,64 64,70 96,48 128,56 160,34 192,42 224,20 256,30 288,10 320,16"
                fill="none"
                stroke="#1C985A"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <polygon
                points="0,76 32,64 64,70 96,48 128,56 160,34 192,42 224,20 256,30 288,10 320,16 320,96 0,96"
                fill="url(#ticker-chart-fill)"
              />
            </svg>

            <div className="mt-4 inline-flex items-center gap-2 rounded-lg bg-success-500/10 px-3 py-2 text-sm font-medium text-success-600 dark:text-success-400">
              <TrendingUp className="h-4 w-4" aria-hidden="true" />
              BTC Long +12.4% just now
            </div>

            <div className="mt-6 grid grid-cols-3 gap-2 rounded-lg bg-gray-100 p-3 dark:bg-gray-800/50">
              <div>
                <p className="font-mono text-lg font-semibold text-gray-900 dark:text-white">156</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">Traders</p>
              </div>
              <div>
                <p className="font-mono text-lg font-semibold text-gray-900 dark:text-white">73%</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">Win Rate</p>
              </div>
              <div>
                <p className="font-mono text-lg font-semibold text-gray-900 dark:text-white">2.4</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">Profit Factor</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
