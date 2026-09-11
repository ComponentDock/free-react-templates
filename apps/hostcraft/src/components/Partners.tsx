const partners = [
  'https://picsum.photos/seed/hostcraft-partner1/120/40',
  'https://picsum.photos/seed/hostcraft-partner2/120/40',
  'https://picsum.photos/seed/hostcraft-partner3/120/40',
  'https://picsum.photos/seed/hostcraft-partner4/120/40',
  'https://picsum.photos/seed/hostcraft-partner5/120/40',
]

export function Partners() {
  return (
    <section className="bg-bg-light py-12">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-12 px-4 lg:px-8">
        {partners.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Partner ${i + 1}`}
            className="h-10 w-auto opacity-50 grayscale transition-all hover:opacity-100 hover:grayscale-0"
          />
        ))}
      </div>
    </section>
  )
}
