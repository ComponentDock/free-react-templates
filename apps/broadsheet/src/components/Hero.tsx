export function Hero() {
  const breakingNews = [
    'Global markets rally as trade tensions ease',
    'New breakthrough in renewable energy storage technology',
    'World leaders gather for climate summit',
  ]

  const international = [
    'International space station celebrates 25 years of cooperation',
    'Diplomatic talks resume between major powers',
    'Global vaccination campaign reaches milestone',
  ]

  return (
    <section className="bg-lighter-bg py-4" aria-label="Hero">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-4">
          <div className="lg:col-span-3">
            <TickerRow label="Breaking News" items={breakingNews} />
            <div className="mt-2">
              <TickerRow label="International" items={international} variant="secondary" />
            </div>
          </div>
          <div className="flex items-center justify-center rounded bg-gray-200 p-4">
            <span className="text-sm text-text-meta">Advertisement</span>
          </div>
        </div>
      </div>
    </section>
  )
}

function TickerRow({
  label,
  items,
  variant = 'primary',
}: {
  label: string
  items: string[]
  variant?: 'primary' | 'secondary'
}) {
  return (
    <div className="flex items-center overflow-hidden rounded bg-white">
      <span
        className={`shrink-0 px-4 py-2 text-sm font-bold text-white ${
          variant === 'primary' ? 'bg-brand' : 'bg-dark-bg'
        }`}
      >
        {label}
      </span>
      <div className="overflow-hidden px-4">
        <p className="truncate text-sm text-text-body">{items[0]}</p>
      </div>
    </div>
  )
}
