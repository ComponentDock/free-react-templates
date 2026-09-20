import { ArrowRight } from 'lucide-react'

const headliners = [
  {
    name: 'Aurora Waves',
    bio: 'Electronic music producer blending ambient textures with driving beats. Known for immersive live sets that transport audiences.',
    image: 'https://picsum.photos/seed/encoremix-headliner-1/600/600',
  },
  {
    name: 'Neon Dusk',
    bio: 'Alternative rock band from Brooklyn. Their latest album "Midnight Signal" topped indie charts worldwide.',
    image: 'https://picsum.photos/seed/encoremix-headliner-2/600/600',
  },
  {
    name: 'Velvet Echo',
    bio: 'Neo-soul vocalist with a four-octave range. Grammy-nominated for her genre-defying debut album.',
    image: 'https://picsum.photos/seed/encoremix-headliner-3/600/600',
  },
]

export function LineupHeadliners() {
  return (
    <section
      id="artists"
      className="relative bg-cover bg-center py-24"
      style={{
        backgroundImage:
          'linear-gradient(rgba(5,5,5,0.85), rgba(5,5,5,0.85)), url(https://picsum.photos/seed/encoremix-middle/1920/1080)',
      }}
    >
      <div className="mx-auto max-w-6xl px-4">
        <p className="mb-2 text-center text-sm font-medium tracking-widest text-brand-subtitle uppercase">
          Just the best
        </p>
        <h2 className="mb-16 text-center text-3xl font-bold text-white sm:text-4xl">
          The Lineup Artists-Headliners
        </h2>

        <div className="flex flex-col gap-12">
          {headliners.map((artist, i) => (
            <div
              key={artist.name}
              className={`flex flex-col items-center gap-8 bg-white p-8 shadow-[50px_40px_115px_rgba(0,0,0,0.1)] md:flex-row ${
                i % 2 !== 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <img
                src={artist.image}
                alt={artist.name}
                className="h-72 w-72 object-cover"
                loading="lazy"
              />
              <div className="flex-1">
                <h3 className="mb-4 text-2xl font-bold text-brand-heading">{artist.name}</h3>
                <p className="mb-6 leading-relaxed text-brand-meta">{artist.bio}</p>
                <a
                  href="#lineup"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-brand-cyan transition-colors hover:text-brand-mint"
                >
                  View profile <ArrowRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
