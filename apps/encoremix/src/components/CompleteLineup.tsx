const lineup = [
  { name: 'Solar Flare', image: 'https://picsum.photos/seed/encoremix-lineup-1/400/400' },
  { name: 'Crimson Tide', image: 'https://picsum.photos/seed/encoremix-lineup-2/400/400' },
  { name: 'Phantom Groove', image: 'https://picsum.photos/seed/encoremix-lineup-3/400/400' },
  { name: 'Drift Mode', image: 'https://picsum.photos/seed/encoremix-lineup-4/400/400' },
  { name: 'Midnight Run', image: 'https://picsum.photos/seed/encoremix-lineup-5/400/400' },
  { name: 'Echo Chamber', image: 'https://picsum.photos/seed/encoremix-lineup-6/400/400' },
  { name: 'Static Bloom', image: 'https://picsum.photos/seed/encoremix-lineup-7/400/400' },
  { name: 'Waveform', image: 'https://picsum.photos/seed/encoremix-lineup-8/400/400' },
]

export function CompleteLineup() {
  return (
    <section id="lineup" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-4">
        <p className="mb-2 text-center text-sm font-medium tracking-widest text-brand-subtitle uppercase">
          Just the best
        </p>
        <h2 className="mb-12 text-center text-3xl font-bold text-brand-heading sm:text-4xl">
          The Complete Lineup
        </h2>

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
          {lineup.map((artist) => (
            <div key={artist.name} className="group text-center">
              <img
                src={artist.image}
                alt={artist.name}
                className="mb-3 aspect-square w-full object-cover grayscale transition-all group-hover:grayscale-0"
                loading="lazy"
              />
              <p className="text-sm font-medium text-brand-heading">{artist.name}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#artists"
            className="gradient-bg inline-block px-8 py-3 text-sm font-semibold text-brand-dark transition-opacity hover:opacity-90"
          >
            See all lineup
          </a>
        </div>
      </div>
    </section>
  )
}
