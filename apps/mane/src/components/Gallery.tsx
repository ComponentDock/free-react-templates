const tiles = [
  { seed: 'mane-gallery-1', alt: 'Beard trim in progress' },
  { seed: 'mane-gallery-2', alt: 'Precision haircut being styled' },
  { seed: 'mane-gallery-3', alt: 'Hairstylist finishing a blowout' },
  { seed: 'mane-gallery-4', alt: 'Elegant updo hairstyle' },
  { seed: 'mane-gallery-5', alt: 'Makeup application at the mirror' },
  { seed: 'mane-gallery-6', alt: 'Model with a sleek salon look' },
  { seed: 'mane-gallery-7', alt: 'Soft waves hairstyle close-up' },
  { seed: 'mane-gallery-8', alt: 'Stylist arranging salon tools' },
] as const

export function Gallery() {
  return (
    <section
      id="gallery"
      className="bg-white py-20 transition-colors dark:bg-gray-950 lg:py-[120px]"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold uppercase text-ink dark:text-white sm:text-4xl">
            Our gallery
          </h2>
          <p className="mt-4 text-sm font-medium uppercase tracking-[0.25em] text-brand">
            A glimpse of our work and our happy clients
          </p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {tiles.map((tile) => (
            <figure key={tile.seed} className="overflow-hidden">
              <img
                src={`https://picsum.photos/seed/${tile.seed}/600/700`}
                alt={tile.alt}
                loading="lazy"
                className="aspect-[6/7] w-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
