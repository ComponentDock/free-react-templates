const partners = ['Logo 1', 'Logo 2', 'Logo 3', 'Logo 4', 'Logo 5', 'Logo 6']

export function Partners() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-ops-400">
            Our Partners
          </span>
          <h2 className="mt-2 text-3xl font-bold text-gray-900">Trusted By Industry Leaders</h2>
        </div>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
          {partners.map((name) => (
            <div
              key={name}
              className="flex h-16 items-center justify-center rounded-lg bg-white shadow-sm"
            >
              <span className="text-sm font-medium text-gray-400">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
