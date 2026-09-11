const partners = [
  { name: 'Partner 1', image: 'https://picsum.photos/seed/buildwell-partner1/150/60' },
  { name: 'Partner 2', image: 'https://picsum.photos/seed/buildwell-partner2/150/60' },
  { name: 'Partner 3', image: 'https://picsum.photos/seed/buildwell-partner3/150/60' },
  { name: 'Partner 4', image: 'https://picsum.photos/seed/buildwell-partner4/150/60' },
  { name: 'Partner 5', image: 'https://picsum.photos/seed/buildwell-partner5/150/60' },
] as const

export function Partners() {
  return (
    <section id="partners" className="bg-light py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">Subtitle</p>
          <h2 className="mt-2 text-3xl font-bold text-heading">Our Clients</h2>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {partners.map((partner) => (
            <img
              key={partner.name}
              src={partner.image}
              alt={partner.name}
              className="h-12 w-auto object-contain opacity-60 grayscale transition-all hover:opacity-100 hover:grayscale-0"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
