const brands = [
  { name: 'PharmaCorp', width: 120 },
  { name: 'MedTech', width: 100 },
  { name: 'HealthPlus', width: 130 },
  { name: 'BioGen', width: 110 },
  { name: 'CareFirst', width: 120 },
  { name: 'VitaLab', width: 100 },
]

export function Brands() {
  return (
    <section className="bg-light-bg py-20" aria-label="Partners">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-wrap items-center justify-center gap-12">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="flex h-16 items-center justify-center opacity-40 grayscale hover:opacity-70 hover:grayscale-0 transition-all"
            >
              <span className="text-2xl font-bold text-heading/60" style={{ width: brand.width }}>
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
