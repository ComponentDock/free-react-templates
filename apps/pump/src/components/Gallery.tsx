import { BrandIcon } from './BrandIcon'

const tiles = [
  { seed: 'pump-gallery-1', label: 'Deadlift session' },
  { seed: 'pump-gallery-2', label: 'Cardio corner' },
  { seed: 'pump-gallery-3', label: 'Yoga studio' },
  { seed: 'pump-gallery-4', label: 'Battle ropes' },
  { seed: 'pump-gallery-5', label: 'Free weights' },
  { seed: 'pump-gallery-6', label: 'Group class' },
] as const

export function Gallery() {
  return (
    <section className="bg-white py-20 transition-colors dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.35em] text-brand">
            Gallery Photo
          </p>
          <h2 className="font-display text-4xl font-black uppercase text-ink dark:text-white">
            Instagram
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {tiles.map((tile) => (
            <a
              key={tile.seed}
              href="#home"
              aria-label={`View ${tile.label} on Instagram`}
              className="group relative block aspect-square overflow-hidden rounded-lg"
            >
              <img
                src={`https://picsum.photos/seed/${tile.seed}/300/300`}
                alt={tile.label}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <span className="absolute inset-0 flex items-center justify-center bg-ink/60 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <BrandIcon name="instagram" className="h-7 w-7" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
