import { ArrowRight, Waves, Flame, UtensilsCrossed } from 'lucide-react'

const thumbnails = [
  { label: 'Pool', icon: Waves, image: 'https://picsum.photos/seed/lodge-pool/120/80' },
  { label: 'Sauna', icon: Flame, image: 'https://picsum.photos/seed/lodge-sauna/120/80' },
  {
    label: 'Restaurant',
    icon: UtensilsCrossed,
    image: 'https://picsum.photos/seed/lodge-restaurant/120/80',
  },
]

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[70vh] items-center bg-cover bg-center"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/lodge-hero/1600/900)' }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-lodge-900/70" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-20 lg:px-8">
        <h1
          className="mb-12 max-w-2xl text-4xl font-light leading-tight text-white md:text-5xl lg:text-6xl"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          We hope you&apos;ll enjoy
          <br />
          your stay.
        </h1>

        {/* Thumbnail nav */}
        <div className="flex flex-wrap gap-4">
          {thumbnails.map((thumb) => (
            <a
              key={thumb.label}
              href="#rooms"
              className="group flex items-center gap-3 overflow-hidden rounded bg-lodge-800/80 transition hover:bg-lodge-700/80"
            >
              <img
                src={thumb.image}
                alt={thumb.label}
                className="h-16 w-20 object-cover"
                loading="lazy"
              />
              <span className="flex items-center gap-2 pr-4 text-sm font-semibold text-white uppercase tracking-wider">
                {thumb.label}
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
