const tiles = [
  { seed: 'slick-insta-1', alt: 'Fresh fade close-up' },
  { seed: 'slick-insta-2', alt: 'Beard sculpting in progress' },
  { seed: 'slick-insta-3', alt: 'Hot towel shave ritual' },
  { seed: 'slick-insta-4', alt: 'Barber tools on the counter' },
  { seed: 'slick-insta-5', alt: 'Client showing off the new cut' },
  { seed: 'slick-insta-6', alt: 'Shop interior at golden hour' },
] as const

export function Instagram() {
  return (
    <section aria-label="Instagram" className="bg-white py-20 transition-colors dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <span className="text-sm font-bold uppercase tracking-[0.25em] text-brand">
            Follow the Craft
          </span>
          <h2 className="mt-4 font-display text-3xl font-black uppercase text-ink dark:text-white sm:text-4xl">
            Instagram
          </h2>
        </div>
        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {tiles.map((tile) => (
            <img
              key={tile.seed}
              src={`https://picsum.photos/seed/${tile.seed}/400/400`}
              alt={tile.alt}
              loading="lazy"
              className="aspect-square w-full rounded-xl object-cover transition-transform duration-300 hover:scale-105"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
