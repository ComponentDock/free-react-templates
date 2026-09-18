const blogPosts = [
  {
    title: 'This Platform Aims to Disrupt the Market',
    category: 'Crypto News',
    date: 'March 18, 2024',
    excerpt:
      'A new decentralized exchange protocol promises to reshape how traders interact with digital assets.',
  },
  {
    title: 'New Hedge Fund Invests in Crypto',
    category: 'Crypto News',
    date: 'March 15, 2024',
    excerpt:
      'Major institutional players are increasing their cryptocurrency allocations this quarter.',
  },
  {
    title: 'DeFi Growth Reaches New Heights',
    category: 'Crypto News',
    date: 'March 12, 2024',
    excerpt:
      'Total value locked in DeFi protocols surpasses previous records as adoption accelerates.',
  },
]

const prices = [
  { rank: '01', name: 'Bitcoin', symbol: 'BTC', price: '$64,256.78', change: 'increase' },
  { rank: '02', name: 'Ethereum', symbol: 'ETH', price: '$3,451.98', change: 'increase' },
  { rank: '03', name: 'Binance Coin', symbol: 'BNB', price: '$556.78', change: 'decrease' },
  { rank: '04', name: 'Solana', symbol: 'SOL', price: '$142.03', change: 'increase' },
  { rank: '05', name: 'Ripple', symbol: 'XRP', price: '$0.62', change: 'increase' },
  { rank: '06', name: 'Cardano', symbol: 'ADA', price: '$0.45', change: 'increase' },
  { rank: '07', name: 'Polkadot', symbol: 'DOT', price: '$7.89', change: 'decrease' },
  { rank: '08', name: 'Avalanche', symbol: 'AVAX', price: '$35.90', change: 'decrease' },
  { rank: '09', name: 'Chainlink', symbol: 'LINK', price: '$14.67', change: 'increase' },
  { rank: '10', name: 'Polygon', symbol: 'MATIC', price: '$0.89', change: 'increase' },
]

export function BlogAndPrices() {
  return (
    <section className="bg-white py-20 dark:bg-navy-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-5">
          {/* Blog Posts */}
          <div className="space-y-8 lg:col-span-3">
            {blogPosts.map((post) => (
              <article key={post.title} className="flex gap-6">
                <img
                  src={`https://picsum.photos/seed/ledgerly-blog-${post.title.slice(0, 5)}/150/120`}
                  alt={post.title}
                  className="h-24 w-32 flex-shrink-0 rounded object-cover"
                  loading="lazy"
                />
                <div>
                  <a
                    href="#"
                    className="text-lg font-semibold text-heading transition-colors hover:text-gold-500 dark:text-white"
                  >
                    {post.title}
                  </a>
                  <p className="mt-1 text-sm text-muted">
                    {post.category} | {post.date}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{post.excerpt}</p>
                </div>
              </article>
            ))}
          </div>

          {/* Price Table */}
          <div className="lg:col-span-2">
            <div className="space-y-3">
              {prices.map((coin) => (
                <div
                  key={coin.symbol}
                  className="flex items-center justify-between rounded bg-surface px-4 py-3 dark:bg-navy-900"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-semibold text-muted">{coin.rank}</span>
                    <div>
                      <p className="text-sm font-semibold text-heading dark:text-white">
                        {coin.name} <span className="text-muted">{coin.symbol}</span>
                      </p>
                    </div>
                  </div>
                  <span
                    className={`text-sm font-semibold ${
                      coin.change === 'increase' ? 'text-green-500' : 'text-red-500'
                    }`}
                  >
                    {coin.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
