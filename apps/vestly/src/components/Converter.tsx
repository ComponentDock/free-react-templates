export function Converter() {
  return (
    <section className="relative py-20">
      {/* Parallax background */}
      <div className="absolute inset-0">
        <img
          src="https://picsum.photos/seed/vestly-converter/1920/600"
          alt=""
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-dark/80" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-center gap-12 lg:flex-row">
          {/* Content */}
          <div className="lg:w-5/12">
            <div className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-brand">
              take a look at our
            </div>
            <h2 className="mb-6 text-3xl font-normal text-white md:text-4xl">
              Bitcoin To Fiat Currency Calculator
            </h2>
            <p className="text-sm leading-relaxed text-body-text">
              Morbi ut dapibus dui. Sed ut iaculis elit, quis varius mauris. Integer ut ultricies
              orci, lobortis egestas sem. Morbi ut dapibus dui. Sed ut iaculis elit, quis varius
              mauris. Integer ut ultricies orci, lobortis egestas sem.
            </p>
          </div>

          {/* Converter forms */}
          <div className="lg:w-7/12">
            <div className="space-y-4">
              {/* Row 1: BTC → EUR */}
              <div className="flex flex-wrap items-center gap-3">
                <input
                  type="text"
                  defaultValue="1"
                  className="w-24 border border-white/20 bg-transparent px-3 py-2.5 text-sm text-white outline-none focus:border-brand"
                  aria-label="Amount"
                />
                <select
                  className="border border-white/20 bg-transparent px-3 py-2.5 text-sm text-white outline-none focus:border-brand"
                  aria-label="From currency"
                >
                  <option value="btc">BTC</option>
                  <option value="ltc">LTC</option>
                  <option value="eth">ETH</option>
                </select>
                <span className="text-lg text-white">=</span>
                <input
                  type="text"
                  defaultValue="9,400.45"
                  readOnly
                  className="w-32 border border-white/20 bg-transparent px-3 py-2.5 text-sm text-white outline-none"
                  aria-label="Result"
                />
                <select
                  className="border border-white/20 bg-transparent px-3 py-2.5 text-sm text-white outline-none focus:border-brand"
                  aria-label="To currency"
                >
                  <option value="eur">EUR</option>
                  <option value="usd">USD</option>
                  <option value="gbp">GBP</option>
                </select>
              </div>

              {/* Row 2: USD → BTC */}
              <div className="flex flex-wrap items-center gap-3">
                <input
                  type="text"
                  defaultValue="10,400"
                  className="w-24 border border-white/20 bg-transparent px-3 py-2.5 text-sm text-white outline-none focus:border-brand"
                  aria-label="Amount"
                />
                <select
                  className="border border-white/20 bg-transparent px-3 py-2.5 text-sm text-white outline-none focus:border-brand"
                  aria-label="From currency"
                >
                  <option value="usd">USD</option>
                  <option value="eur">EUR</option>
                  <option value="gbp">GBP</option>
                </select>
                <span className="text-lg text-white">=</span>
                <input
                  type="text"
                  defaultValue="1.02"
                  readOnly
                  className="w-32 border border-white/20 bg-transparent px-3 py-2.5 text-sm text-white outline-none"
                  aria-label="Result"
                />
                <select
                  className="border border-white/20 bg-transparent px-3 py-2.5 text-sm text-white outline-none focus:border-brand"
                  aria-label="To currency"
                >
                  <option value="btc">BTC</option>
                  <option value="ltc">LTC</option>
                  <option value="eth">ETH</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
