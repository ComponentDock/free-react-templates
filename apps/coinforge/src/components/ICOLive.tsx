export function ICOLive() {
  const stats = [
    { label: 'Token Sold', value: '126,419,796' },
    { label: 'ETH collected', value: '90,252' },
    { label: 'BTC collected', value: '90,152' },
    { label: 'LTH collected', value: '5,052' },
  ]

  return (
    <section id="tokensale" className="bg-navy py-20">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
          <span className="text-coral">ICO</span> Live Now
        </h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="rounded-xl bg-surface/60 p-6">
              <p className="text-sm text-muted">{s.label}</p>
              <p className="mt-2 text-2xl font-bold text-white">{s.value}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-xl bg-surface/60 p-6">
          <p className="mb-2 text-sm text-muted">Sale Ends in</p>
          <div className="flex justify-center gap-6">
            {['Days', 'Hours', 'Minutes', 'Seconds'].map((unit) => (
              <div key={unit}>
                <span className="block text-3xl font-bold text-white">
                  {unit === 'Days' ? '12' : unit === 'Hours' ? '08' : '45'}
                </span>
                <span className="text-xs text-muted">{unit}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10">
          <div className="mx-auto max-w-2xl">
            <div className="h-4 overflow-hidden rounded-full bg-surface">
              <div
                className="h-full rounded-full bg-gradient-to-r from-gold to-coral"
                style={{ width: '80%' }}
              />
            </div>
            <div className="mt-2 flex justify-between text-sm text-muted">
              <span>Soft Cap</span>
              <span>Max Cap</span>
            </div>
            <p className="mt-1 text-sm text-coral">$38M raised</p>
          </div>
          <a
            href="#tokensale"
            className="mt-6 inline-block rounded-full bg-gradient-to-r from-gold to-coral px-10 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            Buy Tokens
          </a>
        </div>
      </div>
    </section>
  )
}
