const partners = [
  { name: 'Partner 1', id: 1 },
  { name: 'Partner 2', id: 2 },
  { name: 'Partner 3', id: 3 },
  { name: 'Partner 4', id: 4 },
  { name: 'Partner 5', id: 5 },
] as const

export function Partner() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="mb-12 text-center font-display text-3xl font-bold text-ink md:text-4xl">
          Our Partners
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-12">
          {partners.map((p) => (
            <div
              key={p.id}
              className="flex h-20 w-40 items-center justify-center rounded-lg bg-gray-100 grayscale transition-all hover:grayscale-0"
            >
              <img
                src={`https://picsum.photos/seed/partner${p.id}/160/80`}
                alt={p.name}
                className="h-full w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
