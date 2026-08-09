import { cn } from '@free-react-templates/ui'

const tiles = [
  { seed: 1, span: 'lg:col-span-2' },
  { seed: 2, span: '' },
  { seed: 3, span: '' },
  { seed: 4, span: 'lg:col-span-2' },
  { seed: 5, span: '' },
  { seed: 6, span: '' },
] as const

export function Portfolio() {
  return (
    <section id="portfolio" className="bg-white pb-24 transition-colors dark:bg-gray-950">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        {tiles.map((tile) => (
          <a
            key={tile.seed}
            href="#portfolio"
            className={cn('group relative block overflow-hidden', tile.span)}
          >
            <img
              src={`https://picsum.photos/seed/haute-portfolio-${tile.seed}/800/1000`}
              alt=""
              className="aspect-[4/5] w-full object-cover"
            />
            <span
              aria-hidden="true"
              className="absolute inset-0 border-[10px] border-ink bg-white/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />
            <h4 className="absolute inset-0 z-10 flex items-center justify-center text-lg font-semibold uppercase tracking-[0.2em] text-ink opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              See More
            </h4>
          </a>
        ))}
      </div>
    </section>
  )
}
