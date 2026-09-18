const currencies = ['BTC', 'ETH', 'USDT', 'BNB', 'SOL']

export function CurrencyCalculator() {
  return (
    <section
      className="relative bg-navy-900 bg-cover bg-center py-20"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/ledgerly-parallax/1920/800)' }}
    >
      <div className="absolute inset-0 bg-navy-900/80" />
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="mb-4 text-4xl font-light text-white">Cryptocurrency Calculator</h2>
          <p className="text-gray-300">
            Convert between popular cryptocurrencies and fiat currencies instantly.
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex flex-col items-center justify-center gap-4 rounded-lg bg-white/10 p-6 backdrop-blur-sm sm:flex-row">
            <div className="flex items-center gap-2">
              <input
                type="text"
                defaultValue="1"
                className="w-24 rounded bg-white px-3 py-2 text-heading focus:ring-2 focus:ring-gold-500 focus:outline-none"
                aria-label="Amount"
              />
              <select
                className="rounded bg-white px-3 py-2 text-heading focus:ring-2 focus:ring-gold-500 focus:outline-none"
                aria-label="From currency"
              >
                {currencies.map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
            </div>
            <span className="text-2xl font-bold text-white">=</span>
            <div className="flex items-center gap-2">
              <input
                type="text"
                defaultValue="64,250"
                className="w-24 rounded bg-white px-3 py-2 text-heading focus:ring-2 focus:ring-gold-500 focus:outline-none"
                aria-label="Result"
              />
              <select
                className="rounded bg-white px-3 py-2 text-heading focus:ring-2 focus:ring-gold-500 focus:outline-none"
                aria-label="To currency"
              >
                <option>USD</option>
                <option>EUR</option>
                <option>GBP</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-4 rounded-lg bg-white/10 p-6 backdrop-blur-sm sm:flex-row">
            <div className="flex items-center gap-2">
              <input
                type="text"
                defaultValue="1000"
                className="w-24 rounded bg-white px-3 py-2 text-heading focus:ring-2 focus:ring-gold-500 focus:outline-none"
                aria-label="Amount"
              />
              <select
                className="rounded bg-white px-3 py-2 text-heading focus:ring-2 focus:ring-gold-500 focus:outline-none"
                aria-label="From currency"
              >
                <option>USD</option>
                <option>EUR</option>
                <option>GBP</option>
              </select>
            </div>
            <span className="text-2xl font-bold text-white">=</span>
            <div className="flex items-center gap-2">
              <input
                type="text"
                defaultValue="0.0156"
                className="w-24 rounded bg-white px-3 py-2 text-heading focus:ring-2 focus:ring-gold-500 focus:outline-none"
                aria-label="Result"
              />
              <select
                className="rounded bg-white px-3 py-2 text-heading focus:ring-2 focus:ring-gold-500 focus:outline-none"
                aria-label="To currency"
              >
                {currencies.map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
