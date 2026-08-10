import { Instagram } from './social-icons'

const tiles = [
  { seed: 'shanti-12', alt: 'Warrior pose at golden hour' },
  { seed: 'shanti-13', alt: 'Group class on the outdoor deck' },
  { seed: 'shanti-14', alt: 'Handstand practice in the studio' },
  { seed: 'shanti-15', alt: 'Calm savasana with soft light' },
] as const

export function Gallery() {
  return (
    <section id="gallery" className="py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <h3 className="text-base font-normal tracking-[0.2em] text-body-500 uppercase">
            Gallery
          </h3>
          <h2 className="mt-3 text-4xl font-extralight text-black sm:text-5xl">
            See the latest photos
          </h2>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {tiles.map((tile) => (
            <a
              key={tile.seed}
              href="#gallery"
              className="group relative block h-[270px] overflow-hidden rounded-sm"
            >
              <img
                src={`https://picsum.photos/seed/${tile.seed}/600/540`}
                alt={tile.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute inset-0 flex items-center justify-center bg-mauve-500/0 transition-colors duration-300 group-hover:bg-mauve-500/30 group-focus-visible:bg-mauve-500/30">
                <span className="flex h-15 w-15 items-center justify-center rounded-full bg-mauve-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                  <Instagram className="h-7 w-7 text-white" aria-hidden="true" />
                </span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
