const brands = [
  'Brand Alpha',
  'Company Beta',
  'Studio Gamma',
  'Agency Delta',
  'Group Epsilon',
  'Corp Zeta',
]

export function Brands() {
  return (
    <section className="bg-paper py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-12">
          {brands.map((name) => (
            <div
              key={name}
              className="text-lg font-bold text-mist/40 transition-colors hover:text-mist"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
