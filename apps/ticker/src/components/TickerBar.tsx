import { cn } from '@free-react-templates/ui'

const tickerItems = [
  { symbol: 'BTC', price: '$67,423', change: 2.4 },
  { symbol: 'ETH', price: '$3,842', change: 1.2 },
  { symbol: 'SPY', price: '$584.32', change: -0.3 },
  { symbol: 'EUR/USD', price: '1.0842', change: 0.1 },
  { symbol: 'XAU/USD', price: '$2,412', change: 0.8 },
  { symbol: 'TSLA', price: '$248.55', change: -1.5 },
] as const

export function TickerBar() {
  // Rendered twice so the CSS marquee (translateX(-50%)) loops seamlessly.
  const items = [...tickerItems, ...tickerItems]

  return (
    <div className="border-y border-gray-200 bg-gray-100 dark:border-gray-800 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl overflow-hidden px-4 sm:px-6 lg:px-8">
        <div
          role="list"
          aria-label="Live market prices"
          className="ticker-animate flex w-max items-center gap-8 py-2"
        >
          {items.map((item, index) => (
            <span
              key={`${item.symbol}-${index}`}
              role="listitem"
              className="flex shrink-0 items-center gap-3"
            >
              <span className="font-mono text-sm font-medium text-gray-600 dark:text-gray-400">
                {item.symbol}
              </span>
              <span className="font-mono text-sm font-medium text-gray-900 dark:text-white">
                {item.price}
              </span>
              <span
                className={cn(
                  'font-mono text-sm font-medium',
                  item.change >= 0 ? 'text-success-500 dark:text-success-400' : 'text-danger-500',
                )}
              >
                {item.change >= 0 ? '+' : ''}
                {item.change}%
              </span>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
