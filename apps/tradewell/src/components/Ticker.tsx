const quotes = [
  { symbol: 'SPY', price: '$587.42', change: '+0.72%', up: true },
  { symbol: 'QQQ', price: '$518.91', change: '+1.54%', up: true },
  { symbol: 'BTC', price: '$104,892', change: '+2.28%', up: true },
  { symbol: 'ETH', price: '$3,342', change: '−1.33%', up: false },
  { symbol: 'AAPL', price: '$227.63', change: '+1.39%', up: true },
  { symbol: 'TSLA', price: '$424.07', change: '−2.06%', up: false },
  { symbol: 'NVDA', price: '$137.71', change: '+4.11%', up: true },
  { symbol: 'DIA', price: '$437.89', change: '+0.36%', up: true },
] as const

function QuoteList({ hidden }: { hidden?: boolean }) {
  return (
    <div className="flex shrink-0 items-center gap-8" aria-hidden={hidden}>
      {quotes.map((quote) => (
        <div key={quote.symbol} className="flex shrink-0 items-center gap-3">
          <span className="font-mono text-sm font-medium text-gray-600 dark:text-gray-400">
            {quote.symbol}
          </span>
          <span className="font-mono text-sm text-gray-900 dark:text-white">{quote.price}</span>
          <span
            className={`font-mono text-sm ${quote.up ? 'text-accent-600 dark:text-accent-400' : 'text-danger-500 dark:text-danger-400'}`}
          >
            {quote.change}
          </span>
        </div>
      ))}
    </div>
  )
}

export function Ticker() {
  return (
    <div className="border-b border-gray-200 bg-gray-100 dark:border-gray-800 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl overflow-hidden px-4">
        <div className="flex w-max animate-ticker items-center gap-8 py-2">
          <QuoteList />
          <QuoteList hidden />
        </div>
      </div>
    </div>
  )
}
