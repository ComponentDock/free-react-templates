const logos = ['CryptoNews', 'BlockFin', 'CoinDesk', 'TokenHub', 'DeFi Pro', 'ChainLink']

export function FeaturedLogos() {
  return (
    <section className="bg-surface py-12">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <p className="mb-8 text-sm uppercase tracking-wider text-muted">We are featured in</p>
        <div className="flex flex-wrap items-center justify-center gap-8">
          {logos.map((name) => (
            <span key={name} className="text-lg font-semibold text-light/40">
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
