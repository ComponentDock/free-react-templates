const partners = ['BuildCo', 'StructPro', 'ConcretePlus', 'SteelWorks', 'ArchDesign']

export function Partners() {
  return (
    <section className="bg-light py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center">
          <h2 className="font-heading text-2xl font-bold uppercase text-heading">Our Partners</h2>
          <div className="mx-auto mt-2 h-1 w-16 bg-accent" />
        </div>
        <div className="flex flex-wrap items-center justify-center gap-8">
          {partners.map((p) => (
            <div
              key={p}
              className="flex h-16 w-32 items-center justify-center rounded bg-white shadow-sm"
            >
              <span className="font-heading text-sm font-bold text-heading/40">{p}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
