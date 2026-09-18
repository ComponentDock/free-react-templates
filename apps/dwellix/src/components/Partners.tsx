const partners = [
  { id: 1, name: 'Partner 1', image: 'https://picsum.photos/seed/dwellix-partner1/150/60' },
  { id: 2, name: 'Partner 2', image: 'https://picsum.photos/seed/dwellix-partner2/150/60' },
  { id: 3, name: 'Partner 3', image: 'https://picsum.photos/seed/dwellix-partner3/150/60' },
  { id: 4, name: 'Partner 4', image: 'https://picsum.photos/seed/dwellix-partner4/150/60' },
  { id: 5, name: 'Partner 5', image: 'https://picsum.photos/seed/dwellix-partner5/150/60' },
]

export function Partners() {
  return (
    <section className="bg-body-bg py-12">
      <div className="mx-auto max-w-6xl px-8">
        <div className="flex flex-wrap items-center justify-center gap-10">
          {partners.map((partner) => (
            <a
              key={partner.id}
              href="#"
              className="opacity-50 grayscale transition-all hover:opacity-100 hover:grayscale-0"
            >
              <img src={partner.image} alt={partner.name} className="h-10 w-auto" loading="lazy" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
