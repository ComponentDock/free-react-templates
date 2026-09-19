const partners = [
  { name: 'Partner 1', image: 'https://picsum.photos/seed/kicks-partner1/200/80' },
  { name: 'Partner 2', image: 'https://picsum.photos/seed/kicks-partner2/200/80' },
  { name: 'Partner 3', image: 'https://picsum.photos/seed/kicks-partner3/200/80' },
  { name: 'Partner 4', image: 'https://picsum.photos/seed/kicks-partner4/200/80' },
  { name: 'Partner 5', image: 'https://picsum.photos/seed/kicks-partner5/200/80' },
]

export function Partners() {
  return (
    <section className="py-12 bg-gray-50" aria-label="Trusted partners">
      <div className="mx-auto max-w-7xl px-5">
        <h2 className="sr-only">Trusted Partners</h2>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {partners.map((partner) => (
            <img
              key={partner.name}
              src={partner.image}
              alt={partner.name}
              className="h-10 md:h-12 w-auto opacity-60 hover:opacity-100 transition-opacity grayscale"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
