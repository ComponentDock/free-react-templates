import { Search } from 'lucide-react'
import { portfolio } from '../data'

const tiles = [
  'mortar-work-1',
  'mortar-work-2',
  'mortar-work-3',
  'mortar-work-4',
  'mortar-work-5',
  'mortar-work-6',
] as const

export function Portfolio() {
  return (
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
          {portfolio.kicker}
        </span>
        <h2 className="mt-2 text-4xl font-medium text-ink md:text-5xl">{portfolio.heading}</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {tiles.map((seed) => (
            <a
              key={seed}
              href="#projects"
              className="group relative flex h-[340px] items-end justify-center overflow-hidden rounded bg-cover bg-center"
              style={{ backgroundImage: `url('https://picsum.photos/seed/${seed}/600/400')` }}
            >
              <div
                className="absolute inset-0 bg-black/30 transition-colors group-hover:bg-black/50"
                aria-hidden="true"
              />
              <span className="absolute inset-0 m-auto flex h-12 w-12 items-center justify-center rounded-full bg-white text-charcoal opacity-0 transition-opacity group-hover:opacity-100">
                <Search className="h-5 w-5" aria-hidden="true" />
              </span>
              <div className="relative z-10 pb-6 text-center">
                <span className="text-sm font-semibold uppercase tracking-wider text-brand">
                  {portfolio.category}
                </span>
                <h3 className="mt-1 text-lg font-medium text-white">{portfolio.title}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
