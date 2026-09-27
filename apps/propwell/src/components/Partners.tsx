const PARTNERS = ['Zillow', 'Realtor', 'Redfin', 'Trulia', 'Compass', 'Coldwell']

export function Partners() {
  return (
    <section className="py-12 bg-white border-t" aria-label="Partners">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-2xl font-bold text-text-dark text-center mb-8">Our Partners</h2>
        <div className="flex flex-wrap items-center justify-center gap-8">
          {PARTNERS.map((name) => (
            <div
              key={name}
              className="flex items-center justify-center w-32 h-16 bg-gray-200 text-gray-500 font-bold text-sm uppercase"
              aria-label={name}
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
