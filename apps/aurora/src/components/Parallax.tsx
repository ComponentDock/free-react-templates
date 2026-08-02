const tiles = [
  {
    title: 'Peak Collection',
    image: 'https://picsum.photos/seed/aurora-peak/900/700',
    caption: 'Outerwear built for the mountains and the city alike.',
  },
  {
    title: 'Night Market',
    image: 'https://picsum.photos/seed/aurora-night/900/700',
    caption: 'Evening looks with texture, depth, and a little drama.',
  },
]

export function Parallax() {
  return (
    <section className="bg-white pb-20">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-2">
        {tiles.map((tile) => (
          <figure key={tile.title} className="group relative overflow-hidden rounded-2xl">
            <img
              src={tile.image}
              alt={tile.title}
              className="h-80 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <figcaption className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 via-black/25 to-transparent p-6 text-white">
              <h3 className="text-2xl font-semibold">{tile.title}</h3>
              <p className="mt-1 max-w-xs text-sm text-white/85">{tile.caption}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
