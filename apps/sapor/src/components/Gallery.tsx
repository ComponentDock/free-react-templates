const tiles = [
  { src: 'https://picsum.photos/seed/sapor-10/800/600', alt: 'Elegant dining room' },
  { src: 'https://picsum.photos/seed/sapor-11/800/600', alt: 'Fresh pasta dish' },
  { src: 'https://picsum.photos/seed/sapor-12/800/600', alt: 'Italian wine selection' },
  { src: 'https://picsum.photos/seed/sapor-13/800/600', alt: 'Restaurant interior' },
  { src: 'https://picsum.photos/seed/sapor-14/800/600', alt: 'Chef plating a dish' },
  { src: 'https://picsum.photos/seed/sapor-15/800/600', alt: 'Wood-fired pizza' },
  { src: 'https://picsum.photos/seed/sapor-16/800/600', alt: 'Candlelit table setting' },
  { src: 'https://picsum.photos/seed/sapor-17/800/600', alt: 'Espresso and dessert' },
] as const

export function Gallery() {
  return (
    <section id="gallery" className="bg-gray-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
            A Glimpse of Sapor
          </h2>
          <p className="mt-6 text-lg text-gray-600">
            Step inside our dining room, our kitchen and our cellar — a look at the moments that
            make Sapor special.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {tiles.map((tile) => (
            <img
              key={tile.src}
              src={tile.src}
              alt={tile.alt}
              loading="lazy"
              className="h-56 w-full rounded-xl object-cover"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
