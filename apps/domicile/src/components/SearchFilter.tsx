const filters = [
  { label: 'Lot Area', options: ['1000', '800', '600'] },
  { label: 'Bedrooms', options: ['1', '2', '3', '4'] },
  { label: 'Bathrooms', options: ['1', '2', '3'] },
  { label: 'Price Range', options: ['$100k-$500k', '$500k-$1M', '$1M+'] },
]
export function SearchFilter() {
  return (
    <section className="py-8 bg-light" id="search">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filters.map((f) => (
            <select
              key={f.label}
              className="w-full px-4 py-3 border border-gray-300 rounded bg-white text-sm text-heading focus:outline-none focus:ring-2 focus:ring-brand"
            >
              <option value="">{f.label}</option>
              {f.options.map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </select>
          ))}
        </div>
      </div>
    </section>
  )
}
