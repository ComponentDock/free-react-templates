import { cn } from '@free-react-templates/ui'
import type { NewsMeta } from '../data'
import { heroCards, imgUrl } from '../data'
import { MetaRow } from './MetaRow'

/** Bento hero grid: two tall cards left, two wide cards right. */
export function HeroGrid() {
  return (
    <section aria-label="Top stories" className="bg-primary">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-1 px-4 py-1 md:grid-cols-5">
        <div className="flex flex-col gap-1 md:col-span-3">
          {heroCards
            .filter((card) => card.tall)
            .map((card) => (
              <HeroCardView
                key={card.seed}
                seed={card.seed}
                title={card.title}
                meta={card.meta}
                className="md:min-h-[300px]"
              />
            ))}
        </div>
        <div className="flex flex-col gap-1 md:col-span-2">
          {heroCards
            .filter((card) => !card.tall)
            .map((card) => (
              <HeroCardView
                key={card.seed}
                seed={card.seed}
                title={card.title}
                meta={card.meta}
                className="md:min-h-[149px]"
              />
            ))}
        </div>
      </div>
    </section>
  )
}

interface HeroCardViewProps {
  seed: string
  title: string
  meta: NewsMeta
  className?: string
}

function HeroCardView({ seed, title, meta, className }: HeroCardViewProps) {
  return (
    <a
      href="#"
      className={cn('group relative block overflow-hidden bg-cover bg-center', className)}
      style={{ backgroundImage: `url(${imgUrl(seed, 600, 300)})` }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80"
      />
      <div className="absolute right-0 bottom-0 left-0 p-5 text-white">
        <h3 className="font-heading text-sm font-bold uppercase transition-colors group-hover:text-[#ccc]">
          {title}
        </h3>
        <div className="mt-2">
          <MetaRow meta={meta} className="text-white/80" />
        </div>
      </div>
    </a>
  )
}
